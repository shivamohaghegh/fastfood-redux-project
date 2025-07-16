import { BiSolidCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ShoppingCartButton = () => {
  const { cart: cartItems } = useSelector((state) => state.cart);
    const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="me-3">
      <NavLink to="/cart">
        <div className="position-relative">
          <BiSolidCart className="navbar-btns" />
          <span className="position-absolute top-0 start-100 translate-middle badge my-badge rounded-pill bg-danger">
            {totalQty}
            <span className="visually-hidden">Items In Cart</span>
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default ShoppingCartButton;
