import { AiOutlineWarning } from "react-icons/ai";
import "./navbarError.css";

const NavbarError = ({ message = "Failed to load navbar items.", onRetry }) => {
  return (
    <div className="navbar-error">
      <div className="navbar-error__content">
        <AiOutlineWarning className="navbar-error__icon" />
        <p className="navbar-error__message">{message}</p>
      </div>
      {onRetry && (
        <button className="navbar-error__button" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default NavbarError;
