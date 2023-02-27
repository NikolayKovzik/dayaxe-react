import React from "react";
import "./weather.scss";
import sprite from "./assets/svg/sprite.svg";

function Weather() {
  return (
    <div className="header__weather weather">
      <svg className="weather__icon">
        <use href={`${sprite}#sunny`} />
      </svg>
      <p className="weather__degrees">90 °F</p>
      <p className="weather__dot">•</p>
      <p className="weather__sky">Sunny</p>
    </div>
  );
}

export default Weather;
