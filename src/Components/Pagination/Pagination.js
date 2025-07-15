import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../../Redux/Product/ProductActions";
import useTotalPages from "../../Hooks/useTotalPages";
import "./pagination.css";

const Pagination = () => {
  const { page } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const totalPages = useTotalPages();
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePage = (e) => {
    const newPage = Number(e.target.value);
    dispatch(fetchFoodItems({ page: newPage }));
  };

  const goPrev = () => {
    if (page > 1) {
      dispatch(fetchFoodItems({ page: page - 1 }));
    }
  };

  const goNext = () => {
    if (page < totalPages) {
      dispatch(fetchFoodItems({ page: page + 1 }));
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={goPrev}
              aria-label="Previous"
              disabled={page === 1}
            >
              <span aria-hidden="true">«</span>
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li
              className={`page-item ${page === number ? "active" : ""}`}
              key={number}
            >
              <button className="page-link" value={number} onClick={handlePage}>
                {number}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="page-link"
              onClick={goNext}
              aria-label="Next"
              disabled={page === totalPages}
            >
              <span aria-hidden="true">»</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
