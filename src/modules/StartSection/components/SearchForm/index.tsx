import React from "react";
import "./search-form.scss";
import sprite from "./assets/svg/sprite.svg";
import DefaultButton from "../../../../UI/DefaultButton";
import SearchInput from "../../UI/SearchInput";
import SearchSelect from "../../UI/SearchSelect";

function SearchForm() {
  return (
    <form action="" className="search-form">
      <div className="search-form__inner">
        <div className="search-form__input-section">
          <SearchInput />
        </div>
        <div className="search-form__select-section">
          <SearchSelect>Jan 12 2009</SearchSelect>
        </div>
        <div className="search-form__select-section">
          <SearchSelect>2 guests</SearchSelect>
        </div>
      </div>
      <DefaultButton
        buttonType="submit"
        className={["search-form__submit-btn", "default-button--dark"]}
      >
        <svg className="search-form__loupe">
          <use href={`${sprite}#search`} />
        </svg>
      </DefaultButton>
    </form>
  );
}

export default SearchForm;
