import { useDispatch, useSelector } from "react-redux";
import "./search.css";
import { fetchFoodItems } from "../../Redux/Product/ProductActions";

const SearchBox = () => {
  const { category, searchTerm, sorting, limit } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const searchTermValue = e.target.value;
    dispatch(fetchFoodItems(category, searchTermValue, sorting, limit));
  };

  return (
    <form className="d-flex me-5" role="search">
      <input
        className="form-control search-box"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleSearch}
        value={searchTerm}
      />
    </form>
  );
};

export default SearchBox;
