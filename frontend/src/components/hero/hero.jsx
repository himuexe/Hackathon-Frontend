import "./hero.css";
import React from "react";
import Sponsors from "./sponsors";
import Agenda from "./agenda";
import Footer from "../footer/footer";
import Schedule from "./schedule";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import ReactGA from "react-ga";
import { gsap } from "gsap";




const hero = () => {
    
  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("https://github.com/himuexe");
  };

  
  return (
    <React.Fragment>
      <div className="parent_hero">
        <div className="content">
          <div className="register_now" onClick={handleRegisterClick}>
            <div>
              <a>REGISTER NOW </a>
            </div>
            <div className="iconhai">
              {" "}
              <KeyboardDoubleArrowRightSharpIcon  style={{ fontSize: 35 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sep"></div>
      <Agenda />
      <div className="bg-sep"></div>
      <Schedule />
      <div className="bg-sep"></div>
      <Sponsors />
      <Footer />
      <div className="bg-sep"></div>
    </React.Fragment>
  );
};

export default hero;