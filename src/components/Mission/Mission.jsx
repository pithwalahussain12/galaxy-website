import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import SecondaryHeader from "../SecondaryHeader/SecondaryHeader.jsx";
import MissionBody from "./MissionBody/MissionBody.jsx";
import Footer from "../Footer/Footer.jsx";

import MissionHeaderBackground from "../../assets/images/page-headers/mission-header.jpg";
import "./Mission.scss";

export default function Mission() {
  return (
    <>
      <Navigation type="secondary" />
      <SecondaryHeader backgroundImage={MissionHeaderBackground} />
      <MissionBody />
      <Footer />
    </>
  );
}
