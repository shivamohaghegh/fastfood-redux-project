import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../../Redux/Product/ProductActions";

const NavbarItems = ({ navbarItems }) => {
  const { category = "All", searchTerm, sorting, limit } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const handleCategory = (e) => {
    const selectedCategory = e.currentTarget.dataset.category;
    dispatch(fetchFoodItems(selectedCategory, searchTerm, sorting, limit));
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
