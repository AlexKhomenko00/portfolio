import React from "react";

import "./BackdropText.css";

const BackdropText = ({ upperText, lowerText, left }) => {
  return (
    <p className={`backdrop-text ${left ? "left" : "right"}`}>
      <span className="backdrop-text__span">{upperText}</span>
      <span className="backdrop-text__span">{lowerText}</span>
    </p>
  );
};

export default BackdropText;
