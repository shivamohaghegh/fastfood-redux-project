import { useNavigate } from "react-router-dom";
import emptyBasket from "../../Image/EmptyBasket.jpg";

const EmptyCart = () => {
    
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/product");
  };

  return (
    <div>
      <div className="empty-cart-box d-flex  justify-content-around">
        <img src={emptyBasket} alt="Empty Cart" className="empty-cart-img" />
      </div>
      <div className="d-flex justify-content-around">
        <button
          className="btn btn-outline-warning btn-lg"
          onClick={handleClick}
        >
          Go To Foods
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
