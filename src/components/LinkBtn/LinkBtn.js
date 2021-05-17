import React from "react";

import "./LinkBtn.css";

const LinkBtn = ({ text, bg, color, Icon, link }) => {
  return (
    <a
      href={link}
      className="link-btn"
      target="_blank"
      rel="noreferrer"
      style={{ backgroundColor: bg, color: color }}
    >
      <Icon fill={color} width="20" height="20" />
      {text}
    </a>
  );
};

export default LinkBtn;
