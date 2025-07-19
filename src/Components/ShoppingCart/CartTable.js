import { useDispatch } from "react-redux";
import CartActionTypes from "../../Redux/Cart/CartActionTypes";

const CartTable = ({ cartItems }) => {
  const dispatch = useDispatch();
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

  return (
    <table className="table table-dark table-striped table-hover rounded-table align-middle text-center m-0">
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
                <small className="mt-3">{item.ingredients.join(", ")}</small>
              </div>
            </td>
            <td className="text-center">${item.price.toFixed(2)}</td>
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
              ${(item.qty * item.price).toFixed(2)}
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
  );
};

export default CartTable;
