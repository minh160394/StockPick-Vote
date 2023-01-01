import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header__container">
      <h1>Website Logo</h1>
      <div className="login-signup-container">
        <div className="login-btn">Login</div>
        <div className="signUp-btn">SignUp</div>
        <div className="help-btn">Help</div>
      </div>
    </div>
  );
};
