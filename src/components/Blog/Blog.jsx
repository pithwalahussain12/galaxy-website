import React from "react";

import Navigation from "../Navigation/Navigation.jsx";
import BlogCard from "./BlogCard/BlogCard.jsx";
import Footer from "../Footer/Footer.jsx";
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader.jsx";
import blogHeader from "../../assets/images/page-headers/blog-header.jpg";
import image1 from "../../assets/images/blog/image1.jpg";
import image2 from "../../assets/images/blog/image2.jpg";
import image3 from "../../assets/images/blog/image3.jpg";
import { returnPrintMonth } from "../../helpers/helpers";

import "./Blog.scss";

const blogs = [
  {
    title: "How to influence influencers",
    author: "Bill James",
    createdAt: `${returnPrintMonth(
      new Date().getMonth()
    )} ${new Date().getDate()}, ${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()} ${
      new Date().getHours() > 12 ? "PM" : "AM"
    }`,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia libero, facere corrupti incidunt, fugit fuga aliquid soluta dignissimos consectetur assumenda repudiandae deserunt cumque esse qui eveniet in deleniti eius cum? Ea iure a laudantium illo.",
    image: image1,
    newPost: true,
  },
  {
    title: "How often should you workout?",
    author: "Jojo Young",
    createdAt: `${returnPrintMonth(
      new Date().getMonth()
    )} ${new Date().getDate()}, ${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()} ${
      new Date().getHours() > 12 ? "PM" : "AM"
    }`,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia libero, facere corrupti incidunt, fugit fuga aliquid soluta dignissimos consectetur assumenda repudiandae deserunt cumque esse qui eveniet in deleniti eius cum? Ea iure a laudantium illo.",
    image: image2,
  },
  {
    title: "The truth behind anti-aging",
    author: "Jojo Young",
    createdAt: `${returnPrintMonth(
      new Date().getMonth()
    )} ${new Date().getDate()}, ${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()} ${
      new Date().getHours() > 12 ? "PM" : "AM"
    }`,
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia libero, facere corrupti incidunt, fugit fuga aliquid soluta dignissimos consectetur assumenda repudiandae deserunt cumque esse qui eveniet in deleniti eius cum? Ea iure a laudantium illo.",
    image: image3,
    featured: true,
  },
];

export default function Blog() {
  return (
    <>
      <Navigation type="secondary" />
      <SecondaryHeader backgroundImage={blogHeader} />
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
            <div className="left-container">
          <h2 className="blog__title secondary-title">Blog</h2>
        </div>
            </div>
            <div className="col-lg-9">
            <div className="blog__right-container">
          {blogs.map((blog, i) => {
            return <BlogCard {...blog} key={i} />;
          })}
        </div>
            </div>

          </div>
        </div>
       
        
      </section>
      <Footer />
    </>
  );
}
