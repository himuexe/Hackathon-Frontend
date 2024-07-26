import "./hero.css";
import React from "react";
import Sponsors from "./sponsors";
import Agenda from "./agenda";
import Footer from "../footer/footer"
import Schedule from "./schedule";

const hero = () => {
  return (
    <React.Fragment>
      <Agenda />
      <div className="bg-sep"></div>
      <Schedule />
      <div className="bg-sep"></div>
      <Sponsors/>
      <Footer/>
      <div className="bg-sep"></div>
    </React.Fragment>
  );
};

export default hero;
