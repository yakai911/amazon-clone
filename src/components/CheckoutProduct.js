import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import "../assets/CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, price, image, rating, count }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  const increment = () => {
    dispatch({ type: "INCREMENT", id: id });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT", id: id });
  };

  console.log(id);

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>￥</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            value={rating}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="checkoutProduct__count">
          <button onClick={increment}>+</button>
          <p>{count}</p>
          <button onClick={decrement}>-</button>
        </div>

        <button onClick={removeFromBasket}>从购物车移除</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
