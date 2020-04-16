import React from "react";

export default function RightIcon({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 512 512"
      className="main-button__icon"
    >
      <title>ionicons-v5-a</title>
      <polyline
        points="184 112 328 256 184 400"
        style={{
          fill: "none",
          stroke: fill ? fill : "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "60px",
        }}
      />
    </svg>
  );
}
