import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../../Redux/Product/ProductActions";
import { useState, useEffect } from "react";
import "./search.css";

const SearchBox = () => {
  const { searchTerm } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [localSearch, setLocalSearch] = useState(searchTerm);

  //This way, the API is called only when the user stops typing for 0.5 seconds:
  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(fetchFoodItems({ searchTerm: localSearch }));
    }, 500); // wait 500ms after last keypress

    return () => clearTimeout(handler); // cleanup if input changes before 500ms
  }, [localSearch, dispatch]);

  const handleSearch = (e) => {
    setLocalSearch(e.target.value);
  };

  return (
    <form className="d-flex me-5" role="search">
      <input
        className="form-control search-box"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleSearch}
        value={localSearch}
      />
    </form>
  );
};

export default SearchBox;

// Common uses of debounce:

// Search inputs – delay firing search requests until the user stops typing.

// Window resizing – run code only after the user finishes resizing the browser window.

// Scrolling – trigger actions (like lazy-loading) only after scrolling stops.

// Form validation – validate input after the user pauses typing instead of every keystroke.

// Button clicks – prevent multiple rapid clicks by allowing only one action in a short time.
