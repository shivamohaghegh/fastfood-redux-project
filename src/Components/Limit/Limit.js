import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../../Redux/Product/ProductActions";
import "./limit.css";

const Limit = () => {
  const { category, searchTerm, sorting, limit } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const handleLimit = (num) => {
    const newLimit = num;
    dispatch(fetchFoodItems(category, searchTerm, sorting, newLimit));
  };

  const limits = [4, 8, 12, 16, 20];

  return (
    <nav aria-label="Items per page">
      <div className="d-flex align-items-center">
        <span className="me-3">Items per page:</span>
        <div>
          {limits.map((num, idx) => (
            <span
              key={num}
              className={`limit-btn ${limit === num ? "active" : ""} `}
              onClick={() => handleLimit(num)}
            >
              {num}
              {idx < limits.length - 1 && (
                <span className="mx-1" style={{ color: "#fff" }}>
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Limit;
