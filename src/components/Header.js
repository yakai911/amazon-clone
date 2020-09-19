import React from "react";
import "../assets/Header.css";
import { Link } from "react-router-dom";
import { Search } from "@material-ui/icons";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">你好，登录</span>
            <span className="header__optionLineTwo">我的账户</span>
          </div>
        </Link>
        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">退货</span>
            <span className="header__optionLineTwo">我的订单</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">免费试享</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <span className="header__cartCount">0</span>
            <span className="header__optionLineTwo">
              <ShoppingCartOutlinedIcon className="header__cartIcon" />
              购物车
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
