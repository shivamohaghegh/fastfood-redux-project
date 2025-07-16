import CartActionTypes from "./CartActionTypes";

const { ADD_TO_CART } = CartActionTypes;

export const addToCart = (foodItem) => (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: foodItem,
  });

  const {
    cart: { cart },
  } = getState();

  localStorage.setItem("cart", JSON.stringify(cart));
};
