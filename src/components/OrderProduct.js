import React from "react";
import Rating from "@material-ui/lab/Rating";
import "../assets/OrderProduct.css";

function OrderProduct({ title, price, image, rating, count }) {
  return (
    <div className="orderProduct">
      <img src={image} alt="product" className="orderProduct__image" />
      <div className="orderProduct__info">
        <p className="orderProduct__title">{title}</p>
        <p className="orderProduct__price">
          <small>￥</small>
          <strong>{price}</strong>
        </p>
        <div className="orderProduct__rating">
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            value={rating}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="orderProduct__count">
          <p>数量：{count}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderProduct;
