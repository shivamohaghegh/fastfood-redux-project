import { MdShoppingCartCheckout } from "react-icons/md";

const CartSummery = ({ cartItems }) => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shipping = 10;
  const tax = (subtotal * 10) / 100;
  const grandTotal = subtotal + shipping + tax;

  return (
    <div className="card cart-summary">
      <div className="card-body">
        <h5 className="card-title mb-4">Order Summary</h5>

        <div className="d-flex justify-content-between mb-3">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>

        <div className="d-flex justify-content-between mb-3">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>

        <hr />

        <div className="d-flex justify-content-between mb-4">
          <strong>Total</strong>
          <strong>${grandTotal.toFixed(2)}</strong>
        </div>

        <button className="btn btn-success w-100">
          <MdShoppingCartCheckout /> Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummery;
