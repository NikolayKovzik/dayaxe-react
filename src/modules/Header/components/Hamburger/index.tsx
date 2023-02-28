import React from "react";
import "./hamburger.scss";

function Hamburger() {
  return (
    <div className="hamburger">
      <div className="hamburger__line hamburger__line--top" />
      <div className="hamburger__line hamburger__line--middle" />
      <div className="hamburger__line hamburger__line--bottom" />
    </div>
  );
}

export default Hamburger;
