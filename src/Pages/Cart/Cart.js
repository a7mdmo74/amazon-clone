import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import "./cart.scss";
import { Navbar } from "../../components";
const Cart = () => {
  const cartItems = useSelector((state) => state.products.cart);
  let prices = 0;
  cartItems.forEach((item) => (prices += item.price));
  return (
    <>
      <Navbar />
      <div className="amazon__cart pt-4">
        {cartItems.length > 0 ? (
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-12">
                <div className="row">
                  {cartItems.map((item) => {
                    const { id } = item;
                    return <Item key={id} item={item} />;
                  })}
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="amazon__cart-price p-3">
                  <p>
                    Subtotal ({cartItems.length} items):{" "}
                    <span className="fw-bold">${Math.floor(prices)}</span>
                  </p>
                  <button className="btn btn-warning">
                    {" "}
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-3">
            <h2 className="fs-2">No items in cart</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
