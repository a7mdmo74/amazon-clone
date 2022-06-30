import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRateIcon from "@mui/icons-material/StarRate";
import { toast } from "react-toastify";

import { addCart } from "../../store/productsSlice/productsSlice";
const Item = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cart);
  const { id, price, rate, imgSrc, desc } = product;
  const addToCart = () => {
    if (cartItems.length > 0) {
      if (cartItems.find((item) => item.id === id)) {
        toast.warn("This item is in cart!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        dispatch(addCart({ id, price, rate, imgSrc, desc }));
      }
    } else {
      dispatch(addCart({ id, price, rate, imgSrc, desc }));
    }
  };
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
      <div className="card d-flex align-items-center pt-4 px-3">
        <img src={imgSrc} className="card-img-top" alt={id} />
        <div className="card-body">
          <h5 className="card-title d-flex align-items-center justify-content-between">
            <span>
              <span className="fw-light">Price:</span> ${price}
            </span>
            <span>
              <span className="fw-light">Rate:</span>
              {[...Array(rate)].map((e, i) => (
                <StarRateIcon key={i} style={{ color: "#ff9800" }} />
              ))}
            </span>
          </h5>
          <p className="card-text">{desc}</p>
          <div className="card-footer ">
            <button className="btn btn-primary" onClick={() => addToCart()}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
