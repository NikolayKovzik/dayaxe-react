import React from "react";
import "./styles/header.scss";
import { NavLink, useLocation } from "react-router-dom";
import sprite from "./assets/svg/sprite.svg";
import Weather from "./components/Weather";
import NavBar from "./components/NavBar";
import Hamburger from "./components/Hamburger";
import UserBar from "./components/UserBar";
import RoutesList from "../../routes";

function Header() {
  const location = useLocation();
  const headerClassList = ["header"];
  const headerContainerClassList = ["header__container"];
  switch (location.pathname) {
    case RoutesList.default:
      headerClassList.push("header--default");
      headerContainerClassList.push("header__container--default");
      break;
    case RoutesList.help:
      headerClassList.push("header--help");
      headerContainerClassList.push("header__container--help");
      break;
    case RoutesList.howItWorks:
      headerClassList.push("header--how-it-works");
      headerContainerClassList.push("header__container--how-it-works");
      break;
    case RoutesList.notFound:
      headerClassList.push("header--not-found");
      headerContainerClassList.push("header__container--not-found");
      break;
    case RoutesList.partners:
      headerClassList.push("header--partners");
      headerContainerClassList.push("header__container--partners");
      break;
    default:
      break;
  }
  return (
    <header className={headerClassList.join(" ")}>
      <div className={headerContainerClassList.join(" ")}>
        <NavLink to={RoutesList.default} className="header__logo-link">
          <svg className="header__logo">
            <use href={`${sprite}#logo`} />
          </svg>
        </NavLink>
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
