import { combineReducers } from "redux";
import NavbarReducer from "./Navbar/NavbarReducer";
import ProductReducer from "./Product/ProductReducer";

const rootReducer = combineReducers({
  navbar: NavbarReducer,
  product: ProductReducer,
});

export default rootReducer;
