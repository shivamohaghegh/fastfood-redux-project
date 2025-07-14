import axios from "axios";
import ProductActionTypes from "./ProductActionTypes";

const {
  SET_PRODUCTS,
  SET_PRODUCTS_LOADING,
  SET_PRODUCTS_ERROR,
  SET_CATEGORY,
  SET_SEARCH_TERM,
  SET_SORTING,
  SET_LIMIT,
  SET_PAGE,
} = ProductActionTypes;

const baseUrl = "https://6844019c71eb5d1be032236c.mockapi.io/FoodList";

export const fetchFoodItems = (
  category,
  searchTerm,
  sorting,
  limit,
  page = 1
) => {
  return async (dispatch) => {
    dispatch({ type: SET_PRODUCTS_LOADING, payload: true });
    dispatch({ type: SET_PRODUCTS_ERROR, payload: null });
    dispatch({ type: SET_CATEGORY, payload: category || "All" });
    dispatch({ type: SET_SEARCH_TERM, payload: searchTerm || "" });
    dispatch({
      type: SET_SORTING,
      payload: sorting || { sortBy: "id", order: "asc" },
    });
    dispatch({ type: SET_LIMIT, payload: limit || 8 });
    dispatch({ type: SET_PAGE, payload: page || 1 });    

    try {
      const params = {};
      if (category && category !== "All") {
        params.category = category;
      }
      if (searchTerm) {
        params.filter = searchTerm;
      }
      if (sorting) {
        params.sortBy = sorting.sortBy;
        params.order = sorting.order;
      }
      if (limit) {
        params.limit = limit;
      }
      if (page) {
        params.page = page;
      }

      const response = await axios.get(baseUrl, { params });
      dispatch({ type: SET_PRODUCTS, payload: response.data });
    } catch (error) {
      dispatch({
        type: SET_PRODUCTS_ERROR,
        payload:
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch food items",
      });
    } finally {
      dispatch({ type: SET_PRODUCTS_LOADING, payload: false });
    }
  };
};
