import React from "react";
import "./feature.css";

function Feature({ title, text }) {
  return (
    <div className="whatblack__features-container-feature">
      <div className="whatblack__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="whatblack__features-container_feature-text">{text}</div>
    </div>
  );
}

export default Feature;
