import "./hero.css";
import React from "react";
import Sponsors from "./sponsors";
import Agenda from "./agenda";
import Footer from "../footer/footer";
import Schedule from "./schedule";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import ReactGA from "react-ga";


const hero = () => {
  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("/");
  };
  return (
    <React.Fragment>
      <div className="parent_hero">
        <div className=" tag-hero-mobile">
          <img
            src="/images/srm.webp"
            alt="srm logo"
            width="160vw"
            className="hero-srm-logo"
          />
          <div className="tag">
            <div>
              <div> ACM Hackathon Event</div>
            </div>
          </div>
        </div>
        <section className="column">
          <div className="left_side">
            <div className="curve"></div>

            <div className="title1">
              <span className="hackathon"> {"Hackathon"}</span>
              <br />
              <p className="description">
                24 hour Hackathon showcasing innovative solutions
                <br /> and tech talents from SRM
              </p>
            </div>
            <div className="register_now" onClick={handleRegisterClick}>
              <div>
                <a>REGISTER NOW </a>
              </div>
              <div>
                {" "}
                <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 35 }} />
              </div>
            </div>
          </div>
        </section>
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
