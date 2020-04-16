import React from "react";
import "./Header.scss";
import Form from "../../Form/Form.jsx";

import heroImage from "../../../assets/images/hero-image.png";

export default function Header() {
  return (
    <section
      className="header"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container">
      <div className="row">
        <div className="col-lg-8">
        <div className="header__content">
        <h1 className="header__title">Optimize Life!</h1>
        <p className="header__subtitle">
          Expand your personal and professional horizons with a network of
          passionate individuals. Embark on a journey that will open up a world
          of possibilities for you.
        </p>
        <Form />
     
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
