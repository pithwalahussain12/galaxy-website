import React from "react";

import "./Divider.scss";

export default function Divider({ color, newItem, promotion, promotionWord }) {
  return (
    <div className="divider">
      <hr
        className="divider__hr"
        style={{
          color: newItem ? "black" : color,
          backgroundColor: newItem ? "black" : color,
        }}
      />
      {newItem && <div className="divider__tag divider__tag--new">NEW</div>}
      {promotion && (
        <div className="divider__tag divider__tag--featured">
          {promotionWord}
        </div>
      )}
    </div>
  );
}
