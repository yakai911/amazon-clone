import React from "react";
import "../assets/Product.css";
import Rating from "@material-ui/lab/Rating";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, rating, image, count }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        count,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">
          {title.length > 80 ? title.slice(0, 79) + "..." : title}
        </p>
        <p className="product__price">
          <small>￥</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            value={rating}
            precision={0.5}
            readOnly
          />
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>加入购物车</button>
    </div>
  );
}

export default Product;
