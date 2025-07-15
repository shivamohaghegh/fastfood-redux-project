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

const initialState = {
  foodItems: [],
  foodLoading: false,
  foodError: null,
  category: "All",
  searchTerm: "",
  sorting: { sortBy: "id", order: "asc" },
  limit: 8,
  page: 1,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        foodItems: action.payload,
      };
    case SET_PRODUCTS_LOADING:
      return {
        ...state,
        foodLoading: action.payload,
      };
    case SET_PRODUCTS_ERROR:
      return {
        ...state,
        foodError: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SET_SORTING:
      return {
        ...state,
        sorting: action.payload,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default ProductReducer;
