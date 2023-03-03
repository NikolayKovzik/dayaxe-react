import React from "react";
import sprite from "./assets/svg/sprite.svg";
import { SearchSelectProps } from "./models";
import "./SearchSelect.scss";

function SearchSelect({ defaultValue }: SearchSelectProps) {
  return (
    <div className="search-form__select-section-inner">
      <span className="search-form__select-section-label">{defaultValue}</span>
      <svg className="search-form__pin">
        <use href={`${sprite}#pin`} />
      </svg>
    </div>
  );
}

export default SearchSelect;
