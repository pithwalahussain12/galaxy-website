import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import Footer from "../Footer/Footer.jsx";
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader.jsx";
import FoundersBody from "./FoundersBody/FoundersBody.jsx";

import foundersHeaderImage from "../../assets/images/page-headers/founders-header.jpg";

export default function Founders() {
  return (
    <>
      <Navigation type="secondary" />
      <SecondaryHeader backgroundImage={foundersHeaderImage} />
      <FoundersBody />
      <Footer />
    </>
  );
}
