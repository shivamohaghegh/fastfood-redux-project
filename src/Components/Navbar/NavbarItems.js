import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../../Redux/Product/ProductActions";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarItems = ({ navbarItems }) => {
  const { category, page } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleCategory = (e) => {
    const selectedCategory = e.currentTarget.dataset.category;
    if (location.pathname !== "/product") navigate("/product");
    dispatch(fetchFoodItems({ category: selectedCategory, page: 1 }));
  };
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <button
          className={`nav-link ${category === "All" ? "active" : ""}`}
          data-category="All"
          onClick={handleCategory}
        >
          All
        </button>
      </li>
      {navbarItems?.map((navItem) => (
        <li className="nav-item" key={navItem.id}>
          <button
            className={`nav-link ${category === navItem.name ? "active" : ""}`}
            data-category={navItem.name}
            onClick={handleCategory}
          >
            {navItem.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavbarItems;
