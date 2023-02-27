import React from "react";
import "./styles/main.scss";
import sprite from "./assets/svg/sprite.svg";
import userAvatar from "./assets/images/user-avatar.png";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <svg className="header__logo">
          <use href={`${sprite}#logo`} />
        </svg>
        <div className="header__inner">
          <div className="header__weather weather">
            <svg className="weather__icon">
              <use href={`${sprite}#sunny`} />
            </svg>
            <p className="weather__degrees">90 °F</p>
            <p className="weather__dot">•</p>
            <p className="weather__sky">Sunny</p>
          </div>
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <a className="header__menu-link" href="/#">
                  Help
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="/#">
                  How it works
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__menu-link" href="/#">
                  For Partners
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__user-info">
            <img
              className="header__user-avatar"
              src={userAvatar}
              alt="user-avatar"
            />
            <p className="header__user-name">Roboin Bobin B.</p>
          </div>
          <div className="hamburger">
            <div className="hamburger__line hamburger__line--top" />
            <div className="hamburger__line hamburger__line--middle" />
            <div className="hamburger__line hamburger__line--bottom" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
