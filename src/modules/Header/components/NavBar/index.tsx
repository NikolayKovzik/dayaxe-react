import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { NavBarProps } from "./models";
import { ThemeContext } from "../../../../context/ThemeProvider";

function NavBar({ items }: NavBarProps) {
  const themeContext = useContext(ThemeContext);
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
                    ? `header__menu-link header__menu-link--${themeContext?.theme} header__menu-link--active`
                    : `header__menu-link header__menu-link--${themeContext?.theme}`
                }
                onClick={() => themeContext?.setTheme("dark")}
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
