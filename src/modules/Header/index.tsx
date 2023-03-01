import React from "react";
import "./styles/header.scss";
import { NavLink, useLocation } from "react-router-dom";
import sprite from "./assets/svg/sprite.svg";
import Weather from "./components/Weather";
import NavBar from "./components/NavBar";
import Hamburger from "./components/Hamburger";
import UserBar from "./components/UserBar";
import RoutesList from "../../routes";
import classes from "./utils/headerClassList";

function Header() {
  const location = useLocation();

  return (
    <header
      className={`header ${
        classes[location.pathname as RoutesList].headerClass
      }`}
    >
      <div
        className={`header__container ${
          classes[location.pathname as RoutesList].headerContainerClass
        }`}
      >
        <NavLink to={RoutesList.DEFAULT} className="header__logo-link">
          <svg className="header__logo">
            <use href={`${sprite}#logo`} />
          </svg>
        </NavLink>
        <div className="header__inner">
          <Weather degrees={90} sky="Sunny" spriteId="sunny" />
          <NavBar />
          <UserBar name="Roboin Bobin B." src="user-avatar.png" />
          <Hamburger />
        </div>
      </div>
    </header>
  );
}

export default Header;
