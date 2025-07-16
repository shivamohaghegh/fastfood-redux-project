import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Cart/CartActions";

const FoodCard = ({ foodItems }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (food) => {
    dispatch(addToCart(food));
  };

  return (
    <div className="row">
      {foodItems?.map((food) => (
        <div className="col-12 col-sm-6 col-md-3" key={food.id}>
          <div className="card mycard">
            <img
              src={food.image}
              className="card-img-top mycard-img"
              alt={food.name || "food-image"}
            />
            <div className="badge text-bg-success position-absolute bottom-50 end-0 fs-5">
              Price : {food.price}$
            </div>
            <div className="card-body">
              <div className="position-relative">
                <h5 className="card-title">{food.name}</h5>
              </div>
              <p className="card-text mycard-text">
                {food.ingredients.join(", ")}
              </p>
              <button
                onClick={() => handleAddToCart(food)}
                className="btn btn-sm btn-outline-success"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
