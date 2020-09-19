import React from "react";
import "../assets/Product.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <p>{title}</p>
      <p className="product__price">
        <small>￥</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>★</p>
          ))}
      </div>
      <img src={image} alt="" />
      <button>加入购物车</button>
    </div>
  );
}

export default Product;
