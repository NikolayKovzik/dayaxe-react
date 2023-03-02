import React, { useContext } from "react";
import "./weather.scss";
import sprite from "./assets/svg/sprite.svg";
import { WeatherProps } from "./models";
import { ThemeContext } from "../../../../context/ThemeProvider";

function Weather({ degrees, sky, spriteId }: WeatherProps) {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={`header__weather weather weather--${themeContext?.theme}`}>
      <svg className={`weather__icon weather__icon--${themeContext?.theme}`}>
        <use href={`${sprite}#${spriteId}`} />
      </svg>
      <p className="weather__degrees">{degrees} °F</p>
      <p className="weather__dot">•</p>
      <p className="weather__sky">{sky}</p>
    </div>
  );
}

export default Weather;
