import "./hero.css";
import React from "react";
import Sponsors from "./sponsors";
import Agenda from "./agenda";
import Footer from "../footer/footer";
import Schedule from "./schedule";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import ReactGA from "react-ga";
import { ReactComponent as Calender } from "../../assets/calender.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as ArrowRightWhite } from "../../assets/arrow-right-white.svg";
import { ReactComponent as ArrowRightBlack } from "../../assets/arrow-right-black.svg";
import { ArrowRight } from "@mui/icons-material";

const hero = () => {
  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("/");
  };
  const handleCardClicks = (card) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `${card}`,
    });
    window.open(`${card}`, "_self");
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
          <div className="right_side">
            {/* -------------------------- Column 1 * ---------------------------------- */}

            <div className="col1 animated-div">
              <h3 className="text">
                <div>
                  <div>
                    <div> 10</div> <div> th</div>{" "}
                  </div>{" "}
                  October
                </div>
                <Calender className="calender-icon" />
              </h3>
              <p
                className="text2"
                onClick={() => handleCardClicks("/guidelines")}
              >
                Guidelines <ArrowRightWhite className="arrow-right-icon" />
              </p>
              <p className="text3" onClick={() => handleCardClicks("/events")}>
                Events <ArrowRightWhite className="arrow-right-icon" />
              </p>
            </div>
            {/* -------------------------- Column 2 * ---------------------------------- */}
            <div className="col2 animated-div">
              <h3 className="text4">
                Information Details <Info className="info-icon" />
              </h3>
              <p className="text5" onClick={() => handleCardClicks("/about")}>
                About
                <ArrowRightWhite className="arrow-right-icon" />
              </p>
              <p className="text6" onClick={() => handleCardClicks("/judges")}>
                Judge Panel
                <ArrowRightWhite className="arrow-right-icon" />
              </p>
            </div>
            {/* -------------------------- Column 3 * ---------------------------------- */}
            <div className="col3 animated-div">
              <div className="flex justify-items-start">
                <h3 className="text7">Problem Statements</h3>
              </div>
              <p className="text8" onClick={() => handleCardClicks("/set1")}>
                Collection 1 <ArrowRightWhite className="arrow-right-icon" />
              </p>
              <p className="text9" onClick={() => handleCardClicks("/set2")}>
                Collection 2 <ArrowRightWhite className="arrow-right-icon" />
              </p>
            </div>
            {/* -------------------------- Column 4  ---------------------------------- */}
            <div
              className="col4 animated-div"
              onClick={() =>
                window.open("https://maps.app.goo.gl/6vSeefvaMzZmB3yE9")
              }
            >
              <h3 className="text10">
                Venue <Location className="location-icon" />
              </h3>
              <div className="flex flex-col ">
                <p className="text-white pt-[2vh] text-[1vw] venue-text-mobile">
                  SRM University
                </p>
                <p className="text-white  text-[0.8vw] ">
                  National Highway 45, Potheri, SRM Nagar, Kattankulathur, Tamil
                  Nadu - 603203
                </p>
                <div className="round"></div>
              </div>
            </div>
            {/* -------------------------- Column 5  ---------------------------------- */}
            <div className="col5 "></div>
            {/* -------------------------- Column 6  ---------------------------------- */}
            <div className="col6 animated-div">
              <h3 className="text13">
                Organized By
                <div className="flex justify-center items-center gap-1"></div>
              </h3>
              <div className="flex items-start justify-between flex-col">
                <p className="text14">SRM  </p>
                <p className="text15">ACM SIGKDD Club </p>
                <div className="round2"></div>
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
