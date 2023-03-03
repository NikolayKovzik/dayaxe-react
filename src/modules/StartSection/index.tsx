import React from "react";
import "./styles/start-section.scss";
import Search from "./components/Search";

function StartSection() {
  return (
    <section className="start-section">
      <div className="start-section__container container">
        <h1 className="start-section__title">
          Book pool time and amenities at luxury hotels
        </h1>
        <Search />
      </div>
    </section>
  );
}

export default StartSection;
