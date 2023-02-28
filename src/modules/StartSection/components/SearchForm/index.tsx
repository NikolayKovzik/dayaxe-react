import React from "react";
import "./search-form.scss";
import sprite from "./assets/svg/sprite.svg";
import DefaultButton from "../../../../UI/DefaultButton";

function SearchForm() {
  return (
    <form action="" className="search-form">
      <div className="search-form__inner">
        <div className="search-form__section">
          <div className="search-form__section-inner">
            <span className="search-form__section-label search-form__city">
              Los Angeles, LA
            </span>
            <svg className="search-form__location">
              <use href={`${sprite}#location`} />
            </svg>
          </div>
        </div>
        <div className="search-form__section">
          <div className="search-form__section-inner">
            <span className="search-form__section-label search-form__date">
              Jan 12 2009
            </span>
            <svg className="search-form__pin">
              <use href={`${sprite}#pin`} />
            </svg>
          </div>
        </div>
        <div className="search-form__section">
          <div className="search-form__section-inner">
            <span className="search-form__section-label search-form__guests">
              2 guests
            </span>
            <svg className="search-form__pin">
              <use href={`${sprite}#pin`} />
            </svg>
          </div>
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
