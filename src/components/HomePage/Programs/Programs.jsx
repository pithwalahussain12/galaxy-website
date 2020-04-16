import React from "react";

import MainButton from "../../MainButton/MainButton.jsx";
import Carousel from "../../Carousel/Carousel.jsx";
import "./Programs.scss";

export default function Programs() {
  return (
    <section className="programs">
      <h2 className="programs__title">Programs</h2>
      <p className="programs__paragraph">
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ab illo inventore.

      </p>
      <Carousel />
      <MainButton text="VIEW PROGRAMS" type="secondary" />
    </section>
  );
}
