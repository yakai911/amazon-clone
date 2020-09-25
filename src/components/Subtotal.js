import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal, getTotalCount } from "../reducer";
import "../assets/Subtotal.css";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const totalCount = getTotalCount(basket);
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              小计({totalCount}件商品):
              <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"￥"}
      />
      <button onClick={(e) => history.push("/payment")}>进入结算中心</button>
    </div>
  );
}

export default Subtotal;
