import React from "react";
import MainButton from "../../MainButton/MainButton";
import TeamMember from "./TeamMember/TeamMember.jsx";

import "./Team.scss";
import avatar from "../../../assets/images/team/avataaars.png";
import nicoleAvatar from "../../../assets/images/team/nicole-tabibzadeh.png";
import noahAvatar from "../../../assets/images/team/noah-baumbach.png";

export default function Team() {
  const data = [
    {
      bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas omnis nulla temporibus?",
      name: "Farid Tabibzadeh",
      title: "Co Founder",
      avatar,
    },
    {
      name: "Noah Baumbach",
      title: "Marketing Head",
      avatar: noahAvatar,
    },
    {
      bio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas omnis nulla temporibus?",
      name: "Nicole Tabibzadeh",
      title: "Co Founder and Creative Director",
      avatar: nicoleAvatar,
    },
  ];
  return (
    <section className="team container">
      <div className="row">
              <div className="team__left-container col-lg-7">
        <h1 className="team__title">Our Team</h1>
        <p className="team__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus modi quasi non earum esse, saepe autem quaerat vel
          iusto totam et animi assumenda nobis? Consequatur fugiat quos nisi
          animi vitae expedita nihil quis. Ea nostrum voluptatibus voluptate
          molestias nam qui nemo, officiis harum, sapiente porro inventore modi
          totam odit perspiciatis.
        </p>
        <MainButton text="MEET THE FOUNDERS" type="secondary" />
      </div>
      <div className="team__right-container col-lg-5">
        {data.map((member, i) => (
          <TeamMember key={i} {...member} />
        ))}
      </div>
      </div>

    </section>
  );
}
