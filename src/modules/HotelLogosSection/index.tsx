import React from "react";
import "./styles/hotel-logos-section.scss";

import ritzCarltonImg from "./assets/images/the_ritz_carlton.png";
import hyatt from "./assets/images/hyatt.png";
import viceroy from "./assets/images/viceroy.png";
import fairmont from "./assets/images/fairmont.png";
import fourSeasons from "./assets/images/four_seasons.png";
import hilton from "./assets/images/hilton.png";
import westin from "./assets/images/westin.png";
import intercontinental from "./assets/images/intercontinental.png";

import ritzCarltonImg2 from "./assets/images/the_ritz_carlton2.png";
import hyatt2 from "./assets/images/hyatt2.png";
import viceroy2 from "./assets/images/viceroy2.png";
import fairmont2 from "./assets/images/fairmont2.png";
import fourSeasons2 from "./assets/images/four_seasons2.png";
import hilton2 from "./assets/images/hilton2.png";
import westin2 from "./assets/images/westin2.png";
import intercontinental2 from "./assets/images/intercontinental2.png";

function HotelLogosSection() {
  return (
    <section className="hotels">
      <div className="hotels__container">
        <div className="hotels__slider">
          <div className="hotels__list">
            <div className="hotels__list-item">
              <img
                className="hotels__logo"
                src={ritzCarltonImg}
                alt="ritz-carlton"
              />
            </div>
            <div className="hotels__list-item">
              <img className="hotels__logo" src={hyatt} alt="hyatt" />
            </div>
            <div className="hotels__list-item">
              <img className="hotels__logo" src={viceroy} alt="viceroy" />
            </div>
            <div className="hotels__list-item">
              <img className="hotels__logo" src={fairmont} alt="fairmont" />
            </div>
            <div className="hotels__list-item">
              <img
                className="hotels__logo"
                src={fourSeasons}
                alt="four-seasons"
              />
            </div>
            <div className="hotels__list-item">
              <img className="hotels__logo" src={hilton} alt="hilton" />
            </div>
            <div className="hotels__list-item">
              <img className="hotels__logo" src={westin} alt="westin" />
            </div>
            <div className="hotels__list-item">
              <img
                className="hotels__logo"
                src={intercontinental}
                alt="intercontinental"
              />
            </div>
            <div className="hotels__list-item">
              <img
                className="hotels__logo"
                src={ritzCarltonImg2}
                alt="ritz-carlton"
              />
            </div>
            <div className="hotels__list-item">
              <img className="hotels__logo" src={hyatt2} alt="hyatt" />
            </div>
            <div className="hotels__list-item">
              <img className="hotels__logo" src={viceroy2} alt="viceroy" />
            </div>
            <div className="hotels__list-item">
              <img className="hotels__logo" src={fairmont2} alt="fairmont" />
            </div>
            <div className="hotels__list-item">
              <img
                className="hotels__logo"
                src={fourSeasons2}
                alt="four-seasons"
              />
            </div>
            <div className="hotels__list-item">
              <img className="hotels__logo" src={hilton2} alt="hilton" />
            </div>
            <div className="hotels__list-item">
              <img className="hotels__logo" src={westin2} alt="westin" />
            </div>
            <div className="hotels__list-item">
              <img
                className="hotels__logo"
                src={intercontinental2}
                alt="intercontinental"
              />
            </div>
          </div>
        </div>
        <div className="hotels__pagination" />
      </div>
    </section>
  );
}

export default HotelLogosSection;
