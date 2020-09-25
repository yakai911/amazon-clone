import React, { useState, useEffect } from "react";
import "../assets/Payment.css";
import axios from "../axios";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { getTotalCount, getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import { useElements, CardElement, useStripe } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const totalCount = getTotalCount(basket);
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState();
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //生成stripe的收款密码来许可本次收款

    const getClientSecret = async () => {
      const response = await axios({
        methods: "post",
        //stripe需要你使用货币的最小计量单位表示总金额,乘以100
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace("./orders");
      });

    // const payload = await stripe
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          您有<Link to="/checkout">({totalCount}件商品)</Link>待结算
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>邮寄地址</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 react Address</p>
            <p>Los Angeles,CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>确认商品及地址</h3>
          </div>
          <div className="payment__items">
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
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>付款方式</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onchang={handleChange} />
              <div className="pryment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>
                        小计({totalCount}件商品):
                        <strong>{value}</strong>
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"￥"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>正在处理</p> : "付款购买"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
