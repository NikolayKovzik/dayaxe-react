import React from "react";
import "./weather.scss";
import sprite from "./assets/svg/sprite.svg";
import { WeatherProps } from "./models";

function Weather({ degrees, sky, spriteId }: WeatherProps) {
  return (
    <div className="header__weather weather">
      <svg className="weather__icon">
        <use href={`${sprite}#${spriteId}`} />
      </svg>
      <p className="weather__degrees">{degrees} °F</p>
      <p className="weather__dot">•</p>
      <p className="weather__sky">{sky}</p>
    </div>
  );
}

export default Weather;
