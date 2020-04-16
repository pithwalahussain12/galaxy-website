import React from "react";

import "./MissionBody.scss";
import eventPic from "../../../assets/images/mission/event.jpg";

export default function MissionBody() {
  return (
    <section className="mission-body">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
          <h2 className="mission-body__title">About</h2>
          </div>
          <div className="col-lg-6">
          <div className="mission-body__text-container">
        <p className="mission-body__main-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          provident libero aliquid ducimus nesciunt asperiores modi! Aspernatur
          perspiciatis eligendi quas architecto fuga numquam? Ipsa molestias
          molestiae autem modi.
        </p>
        <p className="mission-body__lower-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          accusantium culpa ab harum voluptatibus dolorum pariatur
          necessitatibus sunt! Reprehenderit, ex, possimus commodi modi aliquam
          eaque facilis provident, quis cum ullam enim. In dicta error soluta
          earum maxime nihil minus iste, praesentium quaerat expedita quo rerum?
          Praesentium sit dignissimos autem consectetur ullam non atque esse
          cumque similique quis. Id nesciunt a totam quia rerum est recusandae
          velit amet, quidem, quo, ab voluptas ducimus saepe facilis consectetur
          ullam repellendus impedit aperiam ratione. Libero hic, quam iure,
          fugiat est dolorum sapiente facilis harum atque beatae natus
          accusantium quidem amet molestiae eius repellat voluptatum.
        </p>
        <img className="mission-body__picture" src={eventPic} alt="event" />
        <p className="mission-body__lower-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          accusantium culpa ab harum voluptatibus dolorum pariatur
          necessitatibus sunt! Reprehenderit, ex, possimus commodi modi aliquam
          eaque facilis provident, quis cum ullam enim. In dicta error soluta
          earum maxime nihil minus iste, praesentium quaerat expedita quo rerum?
          Praesentium sit dignissimos autem consectetur ullam non atque esse
          cumque similique quis. Id nesciunt a totam quia rerum est recusandae
          velit amet, quidem, quo, ab voluptas ducimus saepe facilis consectetur
          ullam repellendus impedit aperiam ratione. Libero hic, quam iure,
          fugiat est dolorum sapiente facilis harum atque beatae natus
          accusantium quidem amet molestiae eius repellat voluptatum.
        </p>
        <p className="mission-body__lower-paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          mollitia recusandae tempore commodi, natus placeat dolore quasi
          perferendis id necessitatibus soluta nulla officiis incidunt numquam
          eligendi ab unde totam laboriosam?
        </p>
        <p className="mission-body__lower-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          repudiandae necessitatibus odit, dolorem eos officia laboriosam
          laudantium quod neque laborum? Rem cumque fugit id doloribus unde
          provident dolorem numquam, est, in architecto, ratione vitae. Possimus
          saepe quisquam impedit porro numquam!
        </p>
      </div>
          </div>
        </div>
     
      
      </div>
    </section>
  );
}
