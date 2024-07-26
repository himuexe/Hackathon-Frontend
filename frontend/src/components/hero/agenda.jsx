import React, { useEffect, useRef, useState } from "react";
import "./agenda.css";

const section2 = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "agenda-left")
            entry.target.classList.add("agendaScrollAnimateLeft");
          if (entry.target.id == "agenda-right")
            entry.target.classList.add("agendaScrollAnimateRight");
        }
      });
    };

    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll(
      ".about-vision-title,.about-vision-description,.about-mission-title,.about-mission-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  const ref = useRef();
  return (
    <React.Fragment>
      <div className="section2">
        <div className="agenda" id="agenda">
          <div className="title2">
            <img src="/images/rightarrow.png" alt="arrow-logo" />
            <h1 className="title-name">Agenda</h1>
          </div>
          <div className="agenda-text">
            <div className="agenda-des">
              A hackathon is an intense, collaborative event where individuals
              or teams come together to ideate, develop, and present innovative
              solutions to a specific problem or challenge within a limited
              timeframe. Typically spanning anywhere from a few hours to
              multiple days, these events foster a dynamic environment of
              creativity and rapid prototyping. Hackathons attract a diverse
              range of participants, including programmers, designers,
              engineers, and business professionals, who work synergistically to
              transform their ideas into tangible products or services.
            </div>
          </div>
        </div>
        <div className="parent-vision">
          <div className="vision">
            <div className="about-vision-title " id="agenda-left">
              <img
                src="/images/vision.png"
                alt="vision-image"
                width="100px"
                className="about-vision-image"
              />
              Vision
            </div>
            <div className="about-vision-description" id="agenda-right">
              Our vision is to create a dynamic platform that ignites
              innovation, fosters collaboration, and empowers a new generation
              of problem-solvers. By organizing a hackathon, we aim to cultivate
              an ecosystem where brilliant minds converge to tackle pressing
              challenges and develop groundbreaking solutions.
            </div>
          </div>
          <div className="mission">
            <div className="about-mission-title" id="agenda-right">
              <img
                src="/images/mission.png"
                alt="mission-image"
                width={"250px"}
                className="about-mission-image"
              />
              Mission
            </div>
            <div className="about-mission-description" id="agenda-left">
              Our mission is to catalyze innovation by providing a platform for
              aspiring technologists and problem-solvers to collaborate, learn,
              and create impactful solutions. We aim to foster a culture of
              experimentation and rapid prototyping, empowering participants to
              push the boundaries of technology and address real-world
              challenges. Through our hackathon, we strive to nurture a diverse
              community of innovators, providing them with the resources,
              mentorship, and support needed to transform their ideas into
              reality.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default section2;
