import React from "react";
import "./services-list.scss";

function ServicesList() {
  return (
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
  );
}

export default ServicesList;
