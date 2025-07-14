import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFoodItems } from "../../Redux/Product/ProductActions";
import FoodLoading from "../LoadingStatus/FoodLoading";
import FoodError from "../ErrorStatus/FoodError";
import FoodCard from "./FoodCard";
import "./foodList.css";

const FoodList = () => {
  const { foodItems, foodLoading, foodError } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoodItems());
  }, [dispatch]);

  return (
    <div className="container my-5">
      {/* <div className="d-flex justify-content-between my-5">
        <SortingButton />
        <ItemLimitation />
      </div> */}
      {foodLoading ? (
        <FoodLoading />
      ) : foodError ? (
        <FoodError />
      ) : (
        <FoodCard foodItems={foodItems} />
      )}
      {/* <Pagination />  */}
    </div>
  );
};

export default FoodList;
