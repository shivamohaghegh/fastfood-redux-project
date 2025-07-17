import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CartActionTypes from "../../Redux/Cart/CartActionTypes";
import { GiBroom } from "react-icons/gi";
import { MdShoppingCartCheckout } from "react-icons/md";
import "./shoppingCart.css";
import EmptyCart from "../ErrorStatus/EmptyCart";

const ShoppingCart = () => {
  const { cart: cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch({ type: CartActionTypes.SET_CART, payload: savedCart });
  }, []);

  const handleQty = (item, operation) => {
    if (operation === "add") {
      dispatch({ type: CartActionTypes.INCREASE_QTY, payload: item.id });
    } else if (operation === "remove") {
      dispatch({ type: CartActionTypes.DECREASE_QTY, payload: item.id });
    }
  };

  const handleDeleteItem = (item) => {
    dispatch({ type: CartActionTypes.REMOVE_ITEM, payload: item });
  };

  const handleClearCart = () => {
    dispatch({ type: CartActionTypes.CLEAR_CART });
  };

  return (
    <div className="container my-5">
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <table className="table table-dark table-striped table-hover rounded-table align-middle text-center m-0">
            <thead>
              <tr>
                <th scope="col" colSpan="2" className="text-start">
                  Product
                </th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item) => (
                <tr key={item.id}>
                  <td className="cart-product-img-box p-2">
                    <img
                      className="cart-product-img rounded"
                      src={item.image}
                      alt={item.name || "food-image"}
                    />
                  </td>
                  <td>
                    <div className="mb-1 cart-product-name text-start">
                      <h5>{item.name}</h5>
                      <small className="mt-3">
                        {item.ingredients.join(", ")}
                      </small>
                    </div>
                  </td>
                  <td className="text-center">{item.price}$</td>
                  <td className="text-center">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleQty(item, "add")}
                    >
                      +
                    </button>
                    <span className="mx-3">{item.qty}</span>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleQty(item, "remove")}
                    >
                      -
                    </button>
                  </td>
                  <td className="text-center">
                    {(item.qty * item.price).toFixed(2)}$
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleDeleteItem(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-danger" onClick={handleClearCart}>
              <GiBroom /> Clear Cart
            </button>
            <button className="btn btn-success">
              <MdShoppingCartCheckout /> Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
