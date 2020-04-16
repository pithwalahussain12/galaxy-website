import React from "react";

import Divider from "../../Divider/Divider.jsx";

import { blogSecondaryColor } from "../../../global/global";
import MainButton from "../../MainButton/MainButton.jsx";
import SecondaryButton from "../../SecondaryButton/SecondaryButton.jsx";

import "./ProductCard.scss";
import { productImagePath } from "../../../global/global";

export default function ProductCard({
  name,
  subtitle,
  stockAmount,
  originalPrice,
  discount,
  promo,
  newProduct,
  image,
  briefDescription,
}) {
  const outOfStock = stockAmount < 1;
  return (
    <div className="product-card">
      <Divider
        color={promo && blogSecondaryColor}
        newItem={newProduct}
        promotion={promo}
        promotionWord="promo"
      />
      <div className="product-card__product">
        <div className="row">
          <div className="col-lg-4">
          <div className="product-card__image-container">
          <img
            className={`product-card__product-image${
              outOfStock ? " image-bw" : ""
            }`}
            src={`${productImagePath}${image}`}
            alt={name}
          />
        </div>
          </div>
          <div className="col-lg-6">
          <div className="product-card__right-container">
          <h3 className="product-card__product-name">{name}</h3>
          <div className="product-card__price-container">
            <span className="product-card__product-price">{`$${originalPrice}`}</span>{" "}
            <span className="product-card__product-subtitle">&nbsp;&nbsp;|&nbsp;&nbsp; {subtitle}</span>
          </div>
          <div className="product-card__input-container">
            <input
              className="product-card__number-input"
              type="number"
              name="number"
              id="number"
              min="0"
              placeholder="0"
            />
            <SecondaryButton
              text={outOfStock ? "out of stock" : "ADD TO CART"}
              grey={outOfStock}
            />
          </div>
          <p className="product-card__product-description">
            {briefDescription}
          </p>
          {outOfStock && (
            <div className="product-card__out-of-stock">
              <p className="product-card__out-of-stock-paragraph">
                Looks like we have run out of stock, sorry! Subscribe and be the
                first in line to get the{" "}
                <span className="product-card__out-of-stock-paragraph--name">
                  <a href="/">
                    {name} {subtitle}
                  </a>
                  .
                </span>{" "}
              </p>
              <hr className="product-card__out-of-stock-line" />
              <a className="product-card__out-of-stock-link" href="/">
                SUBSCRIBE
              </a>
            </div>
          )}
          <MainButton type="secondary" text="LEARN MORE" />
        </div>
          </div>
        </div>
       
      
      </div>
    </div>
  );
}
