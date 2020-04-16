import React from "react";

import "../../MainButton/MainButton.jsx";
import "./BlogCard.scss";
import MainButton from "../../MainButton/MainButton.jsx";
import FacebookSvg from "../../icons/FacebookSvg.jsx";
import TwitterSvg from "../../icons/TwitterSvg.jsx";
import ShareIconSvg from "../../icons/ShareIcon.jsx";
import {
  black,
  blogSecondaryColor,
  normalHrColor,
  grey,
} from "../../../global/global";

export default function BlogCard({
  title,
  content,
  author,
  image,
  createdAt,
  newPost,
  featured,
}) {
  function setHrColor(states) {
    if (states[0]) return blogSecondaryColor;
    if (states[1]) return black;
    return normalHrColor;
  }

  const hrColor = setHrColor([featured, newPost]);
  console.log(hrColor);

  return (
    <article className="blog-card">
      <div className="blog-card__divider">
        <hr
          className="blog-card__hr"
          style={{ color: hrColor, backgroundColor: hrColor }}
        />
        {newPost && (
          <div className="blog-card__tag blog-card__tag--new">NEW</div>
        )}
        {featured && (
          <div className="blog-card__tag blog-card__tag--featured">
            FEATURED
          </div>
        )}
      </div>
      <h2 className="blog-card__title">{title}</h2>
      <div className="blog-card__date-container">
        <span className="blog-card__author">{author}</span>
        <span className="blog-card__date"> | {createdAt}</span>
      </div>
      <div className="blog-card__image-container">
        <img className="blog-card__image" src={image} alt={title} />
        <div className="blog-card__image-container__social-icons-container">
          <FacebookSvg color={grey} />
          <TwitterSvg color={grey} />
          <ShareIconSvg color={grey} />
        </div>
      </div>

      <p className="blog-card__content">{content}</p>
      <MainButton text="CONTINUE READING" type="secondary" />
    </article>
  );
}
