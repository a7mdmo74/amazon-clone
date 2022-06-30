import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import "./products.scss";
const Products = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <div className="amazon__products">
      <div className="container-fluid">
        <div className="row">
          {products.map((product) => {
            const { id } = product;
            return <Item key={id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
