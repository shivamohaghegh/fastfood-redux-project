import { useSelector, useDispatch } from "react-redux";
import NavbarLoading from "../LoadingStatus/NavbarLoading";
import NavbarError from "../ErrorStatus/NavbarError";
import { CiPizza } from "react-icons/ci";
import NavbarItems from "./NavbarItems";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchNavbarItems } from "../../Redux/Navbar/NavbarActions";
import "./navbar.css";

const Navbar = () => {
  const { navbarItems, navbarLoading, navbarError } = useSelector(
    (state) => state.navbar
  );
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavbarItems());
  }, [dispatch]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand">
          <CiPizza fontSize={"2rem"} />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {navbarLoading ? (
            <NavbarLoading />
          ) : navbarError ? (
            <NavbarError />
          ) : (
            <>
              <NavbarItems navbarItems={navbarItems} />
              <SearchBox />
              {/* <div className="navbar-btn d-flex align-items-center gap-3">
            <UserButton />
            <ShoppingCartButton />
          </div> */}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
