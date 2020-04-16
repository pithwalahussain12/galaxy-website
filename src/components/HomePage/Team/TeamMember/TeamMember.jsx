import React from "react";

import Quotation from "../../../Quotation/Quotation.jsx";
import "./TeamMember.scss";

export default function TeamMember({ bio, name, title, avatar }) {
  return (
    <div className="team-member">
      <Quotation />
      <p className="team-member__bio">{bio}</p>
      <div className="team-member__avatar-container">
        <img className="team-member__avatar" src={avatar} alt={name} />
        <p className="team-member__name">
          <span className="team-member__name--name">{name}</span>
          <br />
          {title}
        </p>
      </div>
    </div>
  );
}
