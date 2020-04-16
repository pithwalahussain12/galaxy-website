import React from "react";

import RightIcon from "./RightIcon/RightIcon.jsx";
import "./MainButton.scss";

export default ({ text, type }) => {
  return (
    <button className="main-button">
      <span
        className="main-button__text"
        style={{ color: type && type === "secondary" ? "#901498" : null }}
      >
        {text}
      </span>
      {/*<img className="main-button__icon" alt="submit" src={rightIcon} style={ type} />*/}
      <RightIcon fill={type && type === "secondary" ? "#901498" : null} />
    </button>
  );
};
