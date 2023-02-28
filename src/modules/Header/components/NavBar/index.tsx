import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import RoutesList from "../../../../routes";

function NavBar() {
  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        <li className="header__menu-item">
          <NavLink to={RoutesList.help} className="header__menu-link">
            Help
          </NavLink>
        </li>
        <li className="header__menu-item">
          <NavLink to={RoutesList.howItWorks} className="header__menu-link">
            How it works
          </NavLink>
        </li>
        <li className="header__menu-item">
          <NavLink to={RoutesList.partners} className="header__menu-link">
            For Partners
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
