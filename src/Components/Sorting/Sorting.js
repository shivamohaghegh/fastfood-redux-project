import { GoSortAsc, GoSortDesc } from "react-icons/go";
import "./sorting.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../../Redux/Product/ProductActions";

const Sorting = () => {
  const { category, searchTerm, sorting, limit } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  const safeSorting = sorting || { sortBy: "id", order: "asc" };

  const handleSortByDefault = () => {
    const newSorting = {
      sortBy: "id",
      order:
        safeSorting.sortBy === "id" && safeSorting.order === "asc"
          ? "desc"
          : "asc",
    };
    dispatch(fetchFoodItems(category, searchTerm, newSorting, limit));
  };

  const handleSortByPrice = () => {
    const newSorting = {
      sortBy: "price",
      order:
        safeSorting.sortBy === "price" && safeSorting.order === "asc"
          ? "desc"
          : "asc",
    };
    dispatch(fetchFoodItems(category, searchTerm, newSorting, limit));
  };

  const handleSortByAlphabet = () => {
    const newSorting = {
      sortBy: "name",
      order:
        safeSorting.sortBy === "name" && safeSorting.order === "asc"
          ? "desc"
          : "asc",
    };
    dispatch(fetchFoodItems(category, searchTerm, newSorting, limit));
  };

  return (
    <div className="d-flex">
      <div onClick={handleSortByDefault} className="sorting-btn">
        <span>Default </span>
        {safeSorting.sortBy === "id" &&
          (safeSorting.order === "asc" ? <GoSortAsc /> : <GoSortDesc />)}
      </div>
      <div onClick={handleSortByPrice} className="sorting-btn">
        <span>Price </span>
        {safeSorting.sortBy === "price" &&
          (safeSorting.order === "asc" ? <GoSortAsc /> : <GoSortDesc />)}
      </div>
      <div onClick={handleSortByAlphabet} className="sorting-btn">
        <span>Alphabet </span>
        {safeSorting.sortBy === "name" &&
          (safeSorting.order === "asc" ? <GoSortAsc /> : <GoSortDesc />)}
      </div>
    </div>
  );
};

export default Sorting;
