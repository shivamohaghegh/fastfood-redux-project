import { TiUser } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const UserButton = () => {
  return (
    <div>
      <NavLink to="/user">
        <TiUser className="navbar-btns"/>
      </NavLink>
    </div>
  );
};

export default UserButton;
