import React from "react";
import "../assets/Order.css";
import moment from "moment";
import OrderProduct from "./OrderProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>订单</h2>
      <p>
        <strong>
          付款时间：
          {moment.unix(order?.data.created).format("MMMM Do YYYY,h:mma")}
        </strong>
      </p>
      <p className="order__id">
        <small>编号：{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <OrderProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          count={item.count}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">
            订单金额：
            {value}
          </h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
