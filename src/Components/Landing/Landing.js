import { AiFillSmile } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <img
        src="https://images.pexels.com/photos/13387647/pexels-photo-13387647.jpeg"
        alt="eat-pizza-drink-beer"
        className="landing-page-img"
      />
      <div className="landing-page-btn">
        <div className="d-flex flex-column gap-5">
          <div className="typewriter">
            <h1>WELCOME TO MY WOLRD!</h1>
          </div>
          <NavLink className="btn btn-dark" to="/product">
            Let's Start Guys!{" "}
            <span>
              <AiFillSmile fontSize={"2rem"} />
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Landing;
