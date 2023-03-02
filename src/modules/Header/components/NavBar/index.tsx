import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { NavBarProps } from "./models";

function NavBar({ items }: NavBarProps) {
  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        {items.map((item) => {
          return (
            <li className="header__menu-item">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "header__menu-link header__menu-link--active"
                    : "header__menu-link"
                }
              >
                {item.content}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
