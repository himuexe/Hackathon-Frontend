import "./hero.css";
import React, { useEffect, useState, useMemo } from "react";
import Sponsors from "./sponsors";
import Agenda from "./agenda";
import Footer from "../footer/footer"
import Schedule from "./schedule";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import ReactGA from "react-ga";
import VanillaTilt from "vanilla-tilt";

const hero = () => {
  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("/");
  };
  // const [countdown, setCountdown] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });
  // const handleCountdown = () => {
  //   const countDate = new Date("August 1, 2024 10:00:00").getTime();
  //   const now = new Date().getTime();
  //   const diff = countDate - now;
  
  //   if (diff <= 0) {
  //     setCountdown({
  //       days: 0,
  //       hours: 0,
  //       minutes: 0,
  //       seconds: 0,
  //     });
  //     return;
  //   }
  
  //   const second = 1000;
  //   const minute = second * 60;
  //   const hour = minute * 60;
  //   const day = hour * 24;
  
  //   var textDay = Math.floor(diff / day);
  //   var textHour = Math.floor((diff % day) / hour);
  //   var textMinute = Math.floor((diff % hour) / minute);
  //   var textSecond = Math.floor((diff % minute) / second);
  
  //   if (textDay.toString().length == 1) {
  //     textDay = `0${textDay}`;
  //   }
  //   if (textHour.toString().length == 1) {
  //     textHour = `0${textHour}`;
  //   }
  //   if (textMinute.toString().length == 1) {
  //     textMinute = `0${textMinute}`;
  //   }
  //   if (textSecond.toString().length == 1) {
  //     textSecond = `0${textSecond}`;
  //   }
  //   if (diff <= 0) {
  //     console.log("Countdown has reached zero");
  //     setCountdown({
  //       days: 0,
  //       hours: 0,
  //       minutes: 0,
  //       seconds: 0,
  //     });
  //     return;
  //   }
  //   setCountdown({
  //     days: textDay,
  //     hours: textHour,
  //     minutes: textMinute,
  //     seconds: textSecond,
  //   });
  // };
  
  useEffect(() => {
    const tilt = VanillaTilt.init(
      document.querySelectorAll(".anim"),
      {
        max: 20,
        speed: 200,
      },
      []
    );
    const interval = setInterval(() => handleCountdown(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  
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
                24 hour Hackathon
                showcasing innovative solutions
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
            {/* <div className="countdown-main">
              <div className="countdown anim">
                <div className="day-card anim">
                  <h3 className="day">{countdown.days}</h3>
                  <h3>Days</h3>
                </div>
                <div className="sep">:</div>
                <div className="hour-card anim">
                  <h3 className="hours">{countdown.hours}</h3>
                  <h3>Hours</h3>
                </div>
                <div className="sep">:</div>
                <div className="min-card anim">
                  <h3 className="minutes">{countdown.minutes}</h3>
                  <h3>Minutes</h3>
                </div>
                <div className="sep">:</div>
                <div className="sec-card anim">
                  <h3 className="seconds">{countdown.seconds}</h3>
                  <h3>Seconds</h3>
                </div>
              </div>
            </div> */}
          </div>
        </section>
      </div>
      <div className="bg-sep"></div>
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
