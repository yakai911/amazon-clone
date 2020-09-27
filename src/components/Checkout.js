import React from "react";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import "../assets/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket?.length === 0 ? (
          <div className="checkout__header">
            <h2>您的购物车里没有商品。</h2>
            <p>
              购物车应该为您购物提供服务。请让它物有所值－可放入书籍、CD、录像带、DVD、玩具、电子产品，等等。
            </p>
            <p>
              继续在<Link to="/">亚马逊首页</Link>上购物。
            </p>
            <p>
              购物车可以暂存您的商品，并且显示商品的最新价格。
              您是否有礼品卡或者优惠码？您可以在选择付款方式时输入礼品卡或者优惠码。
            </p>
          </div>
        ) : (
          <div className="checkout__header">
            <h2>购物车</h2>
            <a>取消选择所有商品</a>
            <hr />
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                count={item.count}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
