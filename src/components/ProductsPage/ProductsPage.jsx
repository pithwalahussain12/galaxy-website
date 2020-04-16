import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import Footer from "../Footer/Footer.jsx";
import ProductCard from "./ProductCard/ProductCard.jsx";

import "./ProductsPage.scss";
import products from "../../db/fake-db";

import galaxyLogo from "../../assets/logo/galaxy-logo-simple.svg";

export default function ProductsPage() {
  return (
    <>
      <Navigation type="secondary" />
      <section className="products-page">
        <div className="products-page__header">
          <div className="products-page__header-container">

            <img
              className="products-page__logo"
              src={galaxyLogo}
              alt="galaxy logo"
            />
            <h2 className="products-page__title">The Galaxy Effect</h2>
            <p className="products-page__subtitle">
              Expand your personal and professional horizons with a network of
              passionate individuals. Embark on a journey that will open up a
              world of possibilities for you.
            </p>
          </div>
        </div>
        <div className="products-page__products-container">
          <div className="container">
          {products.map((product, i) => (
            <ProductCard {...product} />
          ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
