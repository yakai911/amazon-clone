import React, { useState } from "react";
import "../assets/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const [ifLogged, setIfLogged] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.messsage));
  };

  const register = (e) => {
    e.preventDefault();
    //firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo,svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        {ifLogged ? <h1>登录</h1> : <h1>注册</h1>}
        <form>
          {!ifLogged && (
            <>
              <h5>用户名</h5>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </>
          )}
          <h5>邮箱</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>密码</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {ifLogged ? (
            <button
              type="submit"
              className="login__signInButton"
              onClick={signIn}
            >
              登录
            </button>
          ) : (
            <button
              type="submit"
              className="login__signInButton"
              onClick={register}
            >
              注册
            </button>
          )}
        </form>
        {ifLogged && (
          <>
            <p>登录即表示您同意网站的使用条件及隐私声明</p>
            <p>Amazon的新客户？</p>
            <button
              type="submit"
              className="login__registerButton"
              onClick={() => setIfLogged(!ifLogged)}
            >
              创建您的Amazon账户
            </button>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
