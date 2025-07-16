import CartActionTypes from "./CartActionTypes";

const {
  ADD_TO_CART,
  SET_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  REMOVE_ITEM,
  CLEAR_CART,
} = CartActionTypes;

const initialState = {
  cart: [],
};

const CartReducer = (state = initialState, action) => {
  let updatedCart;

  switch (action.type) {
    case ADD_TO_CART:
      const hasItem = state.cart.find((item) => item.id === action.payload.id);
      updatedCart = hasItem
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state.cart, { ...action.payload, qty: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case INCREASE_QTY:
      updatedCart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case DECREASE_QTY:
      updatedCart = state.cart
        .map((item) =>
          item.id === action.payload && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case SET_CART:
      return { ...state, cart: action.payload };

    case REMOVE_ITEM:
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(filteredCart));

      return {
        ...state,
        cart: filteredCart,
      };

    case CLEAR_CART:
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default CartReducer;
