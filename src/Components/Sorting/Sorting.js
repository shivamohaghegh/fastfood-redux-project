import { GoSortAsc, GoSortDesc } from "react-icons/go";
import "./sorting.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../../Redux/Product/ProductActions";

const Sorting = () => {
  const { sorting } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const safeSorting = sorting || { sortBy: "id", order: "asc" };

  const handleSort = (sortBy) => {
    const newSorting = {
      sortBy,
      order:
        safeSorting.sortBy === sortBy && safeSorting.order === "asc"
          ? "desc"
          : "asc",
    };
    dispatch(fetchFoodItems({ sorting: newSorting }));
  };

  return (
    <div className="d-flex">
      <div onClick={() => handleSort("id")} className="sorting-btn">
        <span>Default </span>
        {safeSorting.sortBy === "id" &&
          (safeSorting.order === "asc" ? <GoSortAsc /> : <GoSortDesc />)}
      </div>
      <div onClick={() => handleSort("price")} className="sorting-btn">
        <span>Price </span>
        {safeSorting.sortBy === "price" &&
          (safeSorting.order === "asc" ? <GoSortAsc /> : <GoSortDesc />)}
      </div>
      <div onClick={() => handleSort("name")} className="sorting-btn">
        <span>Alphabet </span>
        {safeSorting.sortBy === "name" &&
          (safeSorting.order === "asc" ? <GoSortAsc /> : <GoSortDesc />)}
      </div>
    </div>
  );
};

export default Sorting;
