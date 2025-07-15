import { BiSolidCart } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const ShoppingCartButton = () => {
  return (
    <div className="me-3">
      <NavLink to="/cart">
        <div className="position-relative">
          <BiSolidCart className="navbar-btns" />
          <span class="position-absolute top-0 start-100 translate-middle badge my-badge rounded-pill bg-danger">
            0<span class="visually-hidden">Items In Cart</span>
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default ShoppingCartButton;
