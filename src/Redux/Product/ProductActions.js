import axios from "axios";
import ProductActionTypes from "./ProductActionTypes";

const { SET_PRODUCTS, SET_PRODUCTS_LOADING, SET_PRODUCTS_ERROR, SET_CATEGORY } =
  ProductActionTypes;

const baseUrl = "https://6844019c71eb5d1be032236c.mockapi.io/FoodList";

export const fetchFoodItems = (category = "All") => {
  return async (dispatch) => {
    dispatch({ type: SET_PRODUCTS_LOADING, payload: true });
    dispatch({ type: SET_CATEGORY, payload: category });

    try {
      const params = {};
      if (category && category !== "All") {
        params.category = category;
      }

      const response = await axios.get(baseUrl, { params });
      dispatch({ type: SET_PRODUCTS, payload: response.data });
    } catch (error) {
      dispatch({ type: SET_PRODUCTS_ERROR, payload: error.message });
    } finally {
      dispatch({ type: SET_PRODUCTS_LOADING, payload: false });
    }
  };
};
