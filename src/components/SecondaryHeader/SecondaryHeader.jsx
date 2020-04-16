import React from "react";

import "./SecondaryHeader.scss";

export default function SecondaryHeader({ backgroundImage, bottom }) {
  const style = {
    backgroundImage: `linear-gradient(to right bottom, rgba(148, 58, 187, 0.65), rgba(148, 58, 187, 0.1)), url(${backgroundImage})`,
    backgroundPosition: bottom && "center bottom",
  };

  return <div className="secondary-header" style={style}></div>;
}
