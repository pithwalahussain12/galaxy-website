import React from "react";

import "./SecondaryButton.scss";

export default function SecondaryButton({ text, grey }) {
  return (
    <button
      className={`secondary-button${grey ? " secondary-button--grey" : ""}`}
    >
      {text}
    </button>
  );
}
