import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CartActionTypes from "../../Redux/Cart/CartActionTypes";
import EmptyCart from "../ErrorStatus/EmptyCart";
import CartSummery from "./CartSummery";
import CartTable from "./CartTable.js";
import CartFooter from "./CartFooter.js";
import "./shoppingCart.css";

const ShoppingCart = () => {
  const { cart: cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch({ type: CartActionTypes.SET_CART, payload: savedCart });
  }, []);

  return (
    <div className="container my-5">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="row">
          <div className="col-md-8">
            <CartTable cartItems={cartItems} />
          </div>
          <div className="col-md-4">
            <CartSummery cartItems={cartItems} />
          </div>
        </div>
      )}
      <CartFooter />
    </div>
  );
};

export default ShoppingCart;
