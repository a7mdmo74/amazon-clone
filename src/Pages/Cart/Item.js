import React from "react";
import { useDispatch } from "react-redux";
import StarRateIcon from "@mui/icons-material/StarRate";
import { removeCart } from "../../store/productsSlice/productsSlice";
const Item = ({ item }) => {
  const dispatch = useDispatch();
  const { id, price, rate, imgSrc, desc } = item;
  return (
    <div className="col-md-6 col-12 mb-3">
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
            <button
              className="btn btn-danger"
              onClick={() => dispatch(removeCart({ id }))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
