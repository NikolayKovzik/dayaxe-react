import React from "react";
import "./styles/header.scss";
import sprite from "./assets/svg/sprite.svg";
import Weather from "./components/Weather";
import NavBar from "./components/NavBar";
import Hamburger from "./components/Hamburger";
import UserBar from "./components/UserBar";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <svg className="header__logo">
          <use href={`${sprite}#logo`} />
        </svg>
        <div className="header__inner">
          <Weather />
          <NavBar />
          <UserBar />
          <Hamburger />
        </div>
      </div>
    </header>
  );
}

export default Header;
