import React from "react";
import "./Carousel.scss";

export default function Carousel() {
  return (
    <div className="carousel ">
      <div className="row">
      <div className="carousel__image carousel__image--1 col-lg-4" alt="future">
        FUTURE
      </div>
      <div className="carousel__image carousel__image--2 col-lg-4" alt="events">
        EVENTS
      </div>
      <div className="carousel__image carousel__image--3 col-lg-4" alt="bootcamp">
        BOOTCAMP
      </div>
      </div>
    </div>
  );
}
