import React, { useState } from "react";
import { ServicesListProps } from "./models";
import "./services-list.scss";

function ServicesList({ services }: ServicesListProps) {
  const [activeButtonNumber, setActiveButtonNumber] = useState(0);
  return (
    <ul className="search__services-list">
      {services.map((service, index) => {
        return (
          <li className="search__service-item">
            <button
              type="button"
              className={`${
                index === activeButtonNumber
                  ? "search__service-btn search__service-btn--active"
                  : "search__service-btn"
              }`}
              onClick={() => setActiveButtonNumber(index)}
            >
              {service}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ServicesList;
