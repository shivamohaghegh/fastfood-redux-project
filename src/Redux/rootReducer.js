import { combineReducers } from "redux";
import NavbarReducer from "./Navbar/NavbarReducer";
import ProductReducer from "./Product/ProductReducer";
import CartReducer from "./Cart/CartReducer";

const rootReducer = combineReducers({
  navbar: NavbarReducer,
  product: ProductReducer,
  cart: CartReducer,
});

export default rootReducer;
