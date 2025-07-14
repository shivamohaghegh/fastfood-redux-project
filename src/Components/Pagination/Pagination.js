import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../../Redux/Product/ProductActions";

const Pagination = () => {
  const {
    category = "All",
    searchTerm,
    sorting,
    limit,
    page,
  } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  console.log(page);
  


  return <div>1</div>;
};
export default Pagination;
