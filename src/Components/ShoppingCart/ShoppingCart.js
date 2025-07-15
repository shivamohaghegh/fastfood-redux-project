const ShoppingCart = () => {
  return (
    <div className="container my-5">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">ُُSubtotal</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {cartItems?.map((item) => (
            <tr>
            <td>{item.image}</td>
            <td>{item.name}</td>
              <td></td>
              <td>{item.price}</td>
              <td>Action</td>
            </tr>
          ))} */}
        </tbody>
      </table>

      <button className="btn btn-danger mb-3">Clear Cart</button>
    </div>
  );
};

export default ShoppingCart;
