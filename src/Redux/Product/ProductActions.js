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

export const fetchFoodItems = (overrides = {}) => {
  return async (dispatch, getState) => {
    const state = getState().product;

    // const category = overrides.category ?? state.category ?? "All";
    // const searchTerm = overrides.searchTerm ?? state.searchTerm ?? "";
    // const sorting = overrides.sorting ?? state.sorting ?? { sortBy: "id", order: "asc" };
    // const limit = overrides.limit ?? state.limit ?? 8;
    // const page = overrides.page ?? state.page ?? 1;

    const {
      category = "All",
      searchTerm = "",
      sorting = { sortBy: "id", order: "asc" },
      limit = 8,
      page = 1,
    } = { ...state, ...overrides };

    dispatch({ type: SET_PRODUCTS_LOADING, payload: true });
    dispatch({ type: SET_PRODUCTS_ERROR, payload: null });
    dispatch({ type: SET_CATEGORY, payload: category });
    dispatch({ type: SET_SEARCH_TERM, payload: searchTerm });
    dispatch({ type: SET_SORTING, payload: sorting });
    dispatch({ type: SET_LIMIT, payload: limit });
    dispatch({ type: SET_PAGE, payload: page });

    try {
      const params = {};
      if (category && category !== "All") params.category = category;
      if (searchTerm) params.filter = searchTerm;
      if (sorting) {
        params.sortBy = sorting.sortBy;
        params.order = sorting.order;
      }
      if (limit) params.limit = limit;
      if (page) params.page = page;

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
