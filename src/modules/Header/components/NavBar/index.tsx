import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

function NavBar() {
  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        <li className="header__menu-item">
          <NavLink to="/help" className="header__menu-link">
            Help
          </NavLink>
        </li>
        <li className="header__menu-item">
          <NavLink to="/how-it-works" className="header__menu-link">
            How it works
          </NavLink>
        </li>
        <li className="header__menu-item">
          <NavLink to="/for-partners" className="header__menu-link">
            For Partners
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
