import React from "react";
import sprite from "./assets/svg/sprite.svg";
import "./SearchInput.scss";

function SearchInput() {
  return (
    <div className="search-form__input-section-inner">
      <span className="search-form__input-section-label search-form__city">
        Los Angeles, LA
      </span>
      <svg className="search-form__location">
        <use href={`${sprite}#location`} />
      </svg>
    </div>
  );
}

export default SearchInput;
