import React from "react";
import FounderCard from "../FounderCard/FounderCard.jsx";

import "./FoundersBody.scss";
import danieleAvatar from "../../../assets/images/team/daniele-vigano.png";
import nicoleAvatar from "../../../assets/images/team/nicole-tabibzadeh.png";
import noahAvatar from "../../../assets/images/team/noah-baumbach.png";
import danieleMedia1 from "../../../assets/images/founders/daniele-media-1.jpg";
import danieleMedia2 from "../../../assets/images/founders/daniele-media-2.jpg";
import danieleMedia3 from "../../../assets/images/founders/daniele-media-3.jpg";

const founders = [
  {
    avatar: danieleAvatar,
    name: "Daniele Viganò",
    job: "co-founder",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium, officiis atque cum iste ipsum voluptas maiores dignissimos quas, repellat eaque error? Eligendi, dignissimos? Sit architecto, adipisci nostrum facilis minus aperiam, voluptatum eveniet cupiditate debitis velit voluptatem provident in rerum sapiente neque vitae, aliquid sint reprehenderit earum nam minima. Neque ipsum quae dolorem natus totam, enim nisi perferendis dolorum reiciendis quod fuga animi optio facilis?",
    media1: {
      image: danieleMedia1,
      alt: "Lorem, ipsum dolor.",
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quibusdam quas?",
    },
    media2: {
      image: danieleMedia2,
      alt: "Lorem, ipsum dolor.",
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quibusdam quas?",
    },
    media3: {
      image: danieleMedia3,
      alt: "Lorem, ipsum dolor.",
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quibusdam quas?",
    },
  },
  {
    avatar: nicoleAvatar,
    name: "Nicole Tabibzadeh",
    job: "co-founder",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium, officiis atque cum iste ipsum voluptas maiores dignissimos quas, repellat eaque error? Eligendi, dignissimos? Sit architecto, adipisci nostrum facilis minus aperiam, voluptatum eveniet cupiditate debitis velit voluptatem provident in rerum sapiente neque vitae, aliquid sint reprehenderit earum nam minima. Neque ipsum quae dolorem natus totam, enim nisi perferendis dolorum reiciendis quod fuga animi optio facilis?",
    media1: {
      image: danieleMedia1,
      alt: "Lorem, ipsum dolor.",
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quibusdam quas?",
    },
    media2: {
      image: danieleMedia2,
      alt: "Lorem, ipsum dolor.",
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quibusdam quas?",
    },
    media3: {
      image: danieleMedia3,
      alt: "Lorem, ipsum dolor.",
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quibusdam quas?",
    },
  },
  {
    avatar: noahAvatar,
    name: "Noah Baumbach",
    job: "co-founder",
    social: {
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    bio:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium, officiis atque cum iste ipsum voluptas maiores dignissimos quas, repellat eaque error? Eligendi, dignissimos? Sit architecto, adipisci nostrum facilis minus aperiam, voluptatum eveniet cupiditate debitis velit voluptatem provident in rerum sapiente neque vitae, aliquid sint reprehenderit earum nam minima. Neque ipsum quae dolorem natus totam, enim nisi perferendis dolorum reiciendis quod fuga animi optio facilis?",
    media1: {
      image: danieleMedia1,
      alt: "Lorem, ipsum dolor.",
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quibusdam quas?",
    },
    media2: {
      image: danieleMedia2,
      alt: "Lorem, ipsum dolor.",
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quibusdam quas?",
    },
    media3: {
      image: danieleMedia3,
      alt: "Lorem, ipsum dolor.",
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, quibusdam quas?",
    },
  },
];

export default function FoundersBody() {
  return (
    <section className="founders-body">
      <div className="container">
      <h1 className="founders-body__title">Founders</h1>
      <p className="founders-body__paragraph para-founder">
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ab illo inventore.


      </p>
      {founders.map((founder, i) => {
        return <FounderCard {...founder} key={i} />;
      })}
      </div>
    </section>
  );
}
