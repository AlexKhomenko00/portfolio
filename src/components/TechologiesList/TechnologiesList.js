import React from "react";

import ReactLogo from "images/logos/react-logo.svg";
import NodeLogo from "images/logos/Node.js_logo.svg";
import MongoDB from "images/logos/mongodb.svg";
import ReduxLogo from "images/logos/redux-logo.svg";
import HTMLLogo from "images/logos/HTML5_Logo.svg";
import CSS3Logo from "images/logos/css3.svg";

import "./TechnologiesList.css";

const TechnologiesList = () => {
  // const listRef = useRef();
  // const isListVisible = useIntersection(listRef, "0px");

  // console.log("listVisible", isListVisible);
  return (
    <ul className="techno-list">
      <li className="techno-list__item">
        <img src={ReactLogo} alt="" className="techno-list__img" />
      </li>
      <li className="techno-list__item">
        <img src={NodeLogo} alt="" className="techno-list__img" />
      </li>
      <li className="techno-list__item">
        <img src={MongoDB} alt="" className="techno-list__img" />
      </li>
      <li className="techno-list__item">
        <img src={ReduxLogo} alt="" className="techno-list__img" />
      </li>
      <li className="techno-list__item">
        <img src={HTMLLogo} alt="" className="techno-list__img" />
      </li>
      <li className="techno-list__item">
        <img src={CSS3Logo} alt="" className="techno-list__img" />
      </li>
    </ul>
  );
};

export default TechnologiesList;
