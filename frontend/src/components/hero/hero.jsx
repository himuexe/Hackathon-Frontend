import "./hero.css";
import React from "react";
import Sponsors from "./sponsors";
import Agenda from "./agenda";
import Footer from "../footer/footer"

const hero = () => {
  return (
    <React.Fragment>
      <Agenda />
      <div className="bg-sep"></div>
      <Sponsors/>
      <Footer/>
    </React.Fragment>
  );
};

export default hero;
