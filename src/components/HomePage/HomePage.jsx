import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import Header from "./Header/Header";
import Products from "./Products/Products.jsx";
import Team from "./Team/Team.jsx";
import Programs from "./Programs/Programs.jsx";
import Footer from "../Footer/Footer.jsx";

export default () => {
  return (
    <>
       <Navigation />
      <Header /> 
      <Products />
      <Team />
       <Programs />
      <Footer /> 
    </>
  );
};
