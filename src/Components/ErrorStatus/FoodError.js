import { AiOutlineWarning } from "react-icons/ai";
import "./foodError.css";

const FoodError = ({ message = "Failed to load food items.", onRetry }) => {
  return (
    <div className="food-error">
      <div className="food-error__content">
        <AiOutlineWarning className="food-error__icon" />
        <p className="food-error__message">{message}</p>
      </div>
      {onRetry && (
        <button className="food-error__button" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default FoodError;
