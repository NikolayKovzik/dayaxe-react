import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { NavBarProps } from "./models";

function NavBar({ items }: NavBarProps) {
  const [activeLinkNumber, setActiveLinkNumber] = useState(0);
  return (
    <nav className="header__menu">
      <ul className="header__menu-list">
        {items.map((item, index) => {
          return (
            <li className="header__menu-item">
              <NavLink
                to={item.link}
                className={`${
                  index === activeLinkNumber
                    ? "header__menu-link header__menu-link--active"
                    : "header__menu-link"
                }`}
                onClick={() => setActiveLinkNumber(index)}
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
