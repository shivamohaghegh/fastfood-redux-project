import ProductActionTypes from "./ProductActionTypes";

const { SET_PRODUCTS, SET_PRODUCTS_LOADING, SET_PRODUCTS_ERROR, SET_CATEGORY } =
  ProductActionTypes;

const initialState = {
  foodItems: [],
  foodLoading: false,
  foodError: null,
  category: "",
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
    default:
      return state;
  }
};

export default ProductReducer;
