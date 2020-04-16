import React, { useState } from "react";
import "./Product.scss";

export default function Product({
  backgroundImage,
  productImage,
  longDescription,
  slogan,
}) {
  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(true);
  }
  function handlleMouseLeave() {
    setHovered(false);
  }

  return (
   
    <div
      className="product"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handlleMouseLeave}
    >
      <img className="product__image" alt="product" src={productImage} />
      <h3 className="product__title">Rocket Fuel</h3>
      <p className="product__description">
        {hovered ? longDescription : slogan}
      </p>
    </div>
  );
}
