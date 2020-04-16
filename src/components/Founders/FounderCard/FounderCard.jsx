import React from "react";

import "./FounderCard.scss";
import InstagramSvg from "../../icons/InstagramSvg";
import FacebookSvg from "../../icons/FacebookSvg.jsx";
import LinkedinSvg from "../../icons/LinkedinSvg";

export default function FounderCard({
  avatar,
  name,
  job,
  social,
  bio,
  media1,
  media2,
  media3,
}) {
  return (
    <div className="row">
    <div className="founder-card">
      
        <div className="col-lg-2">
        <div className="founder-card__left-container">
        <img className="founder-card__avatar" src={avatar} alt={name} />
        <div className="founder-card__social-container">
          {social.linkedin && (
            <a href={social.linkedin}>
              <LinkedinSvg type="founder-card__social-icon" />
            </a>
          )}
          {social.linkedin && (
            <a href={social.instagram}>
              <InstagramSvg type="founder-card__social-icon" />
            </a>
          )}
          {social.facebook && (
            <a href={social.facebook}>
              <FacebookSvg type="founder-card__social-icon" />
            </a>
          )}
        </div>
      </div>
        </div>
        <div className="col-lg-10">
          
      <div className="founder-card__right-container">
        <h3 className="founder-card__name">{name}</h3>
        <h4 className="founder-card__job">{job}</h4>
        <p className="founder-card__bio">{bio}</p>

        <div className="founder-card__media-container">
          <div className="founder-card__media-container--group">
            <img
              className="founder-card__media"
              src={media1.image}
              alt={media1.alt}
            />
            <figcaption className="founder-card__media-subtitle">
              {media1.subtitle}
            </figcaption>
          </div>
          <div className="founder-card__media-container--group">
            <img
              className="founder-card__media"
              src={media2.image}
              alt={media2.alt}
            />
            <figcaption className="founder-card__media-subtitle">
              {media2.subtitle}
            </figcaption>
          </div>
          <div className="founder-card__media-container--group">
            <img
              className="founder-card__media"
              src={media3.image}
              alt={media3.alt}
            />
            <figcaption className="founder-card__media-subtitle">
              {media3.subtitle}
            </figcaption>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
