import { AiFillAliwangwang } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-box">
      <img
        src="https://media.istockphoto.com/id/685168594/fi/valokuva/sulje-pizza.jpg?s=1024x1024&w=is&k=20&c=1-EwsCJYof-U1GpcDgPA1F-M9-lmQtUg7hyzWfWzgxY="
        alt="pizza-footer"
        className="footer-img"
      />
      <div className="footer-footer">
        <AiFillAliwangwang />
        This WebSite Designed For Fun 2025 <BsEmojiSmile />
      </div>
    </div>
  );
};

export default Footer;
