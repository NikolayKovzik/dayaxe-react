import React from "react";
import sprite from "./assets/svg/sprite.svg";
import "./SearchSelect.scss";

type SearchSelectProps = {
  children: React.ReactNode;
};

function SearchSelect({ children }: SearchSelectProps) {
  return (
    <div className="search-form__select-section-inner">
      <span className="search-form__select-section-label">{children}</span>
      <svg className="search-form__pin">
        <use href={`${sprite}#pin`} />
      </svg>
    </div>
  );
}

export default SearchSelect;
