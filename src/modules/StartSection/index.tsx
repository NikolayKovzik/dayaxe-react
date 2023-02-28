import React from "react";
import "./styles/start-section.scss";
import sprite from "./assets/svg/sprite.svg";
// import RoutesList from "../../routes";

function StartSection() {
  return (
    <section className="start-section">
      <div className="start-section__container container">
        <h1 className="start-section__title">
          Book pool time and amenities at luxury hotels
        </h1>
        <article className="search">
          <ul className="search__services-list">
            <li className="search__service-item">
              <button
                type="button"
                className="search__service-btn search__service-btn--active"
              >
                All
              </button>
            </li>
            <li className="search__service-item">
              <button type="button" className="search__service-btn">
                Day Pass
              </button>
            </li>
            <li className="search__service-item">
              <button type="button" className="search__service-btn">
                Cabanas
              </button>
            </li>
            <li className="search__service-item">
              <button type="button" className="search__service-btn">
                Daybeds
              </button>
            </li>
            <li className="search__service-item">
              <button type="button" className="search__service-btn">
                Spa Passes
              </button>
            </li>
            <li className="search__service-item">
              <button type="button" className="search__service-btn">
                Fitness
              </button>
            </li>
            <li className="search__service-item">
              <button type="button" className="search__service-btn">
                Events
              </button>
            </li>
          </ul>
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
            <button
              type="button"
              className="search-form__submit-btn default-button--dark"
            >
              <svg className="search-form__loupe">
                <use href={`${sprite}#search`} />
              </svg>
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}

export default StartSection;
