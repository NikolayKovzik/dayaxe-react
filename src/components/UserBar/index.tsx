import React from "react";
import "./user-bar.scss";
import userAvatar from "./assets/images/user-avatar.png";

function Hamburger() {
  return (
    <div className="header__user-info">
      <img className="header__user-avatar" src={userAvatar} alt="user-avatar" />
      <p className="header__user-name">Roboin Bobin B.</p>
    </div>
  );
}

export default Hamburger;
