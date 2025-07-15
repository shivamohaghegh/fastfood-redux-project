const ProductActionTypes = {
  // Data
  SET_PRODUCTS: "SET_PRODUCTS",
  SET_PRODUCTS_LOADING: "SET_PRODUCTS_LOADING",
  SET_PRODUCTS_ERROR: "SET_PRODUCTS_ERROR",

  // Filters
  SET_CATEGORY: "SET_CATEGORY",
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_SORTING: "SET_SORTING",

  // Pagination
  SET_LIMIT: "SET_LIMIT",
  SET_PAGE: "SET_PAGE",
};

export default ProductActionTypes;



//  RESET_FILTERS
// This action is usually used to clear all filters the user has set — like category, search term, sorting, etc.

// Example usage:

// js
// Copy
// Edit
// dispatch({ type: ProductActionTypes.RESET_FILTERS });
// In the reducer, you might handle it like this:

// js
// Copy
// Edit
// case ProductActionTypes.RESET_FILTERS:
//   return {
//     ...state,
//     category: "",
//     searchTerm: "",
//     sorting: "",
//     page: 1,
//     limit: 10,
//   };
// So it resets the filtering settings to the default values.

//  RESET_PRODUCTS
// This one is used to clear the products list — for example, when a user logs out, or navigates away, or when you want to refresh it from scratch.

// Example:

// js
// Copy
// Edit
// dispatch({ type: ProductActionTypes.RESET_PRODUCTS });
// Reducer example:

// js
// Copy
// Edit
// case ProductActionTypes.RESET_PRODUCTS:
//   return {
//     ...state,
//     products: [],
//     loading: false,
//     error: null,
//   };
// So it resets the product-related data back to an empty or default state.

