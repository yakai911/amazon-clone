import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import "../assets/Subtotal.css";

function Subtotal() {
  const [{ basket, count }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <p>未选择任何商品</p>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              小计({count}件商品):
              <strong>￥{basket.map((item) => item.price)}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"￥"}
      />
      <button>进入结算中心</button>
    </div>
  );
}

export default Subtotal;
