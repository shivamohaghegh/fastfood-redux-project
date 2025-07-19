import { GiBroom } from "react-icons/gi";
import { BiSolidCart } from "react-icons/bi";
import CartActionTypes from "../../Redux/Cart/CartActionTypes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartFooter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch({ type: CartActionTypes.CLEAR_CART });
  };

  const handleContinueShop = () => {
    navigate("/product");
  };

  return (
    <div className="row mt-4">
      <div className="col-md-8">
        <div className="d-flex justify-content-between">
          <button className="btn btn-success" onClick={handleContinueShop}>
            <BiSolidCart /> Continue Shopping{" "}
          </button>
          <button className="btn btn-danger" onClick={handleClearCart}>
            <GiBroom /> Clear Cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
