import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import "./agenda.css";

const agenda = () => {
  const agendaRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const visionTitleRef = useRef(null);
  const missionTitleRef = useRef(null);
  const visionDescriptionRef = useRef(null);
  const missionDescriptionRef = useRef(null);

  useLayoutEffect(() => {
    const elements = [
      agendaRef.current,
      visionRef.current,
      missionRef.current,
      visionTitleRef.current,
      missionTitleRef.current,
      visionDescriptionRef.current,
      missionDescriptionRef.current,
    ];

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="section2">
    <div className="wrapper">
      <div className="agenda" ref={agendaRef}>
        <div className="title2">
          <img src="/images/rightarrow.png" alt="arrow-logo" />
          <h1 className="title-name">Agenda</h1>
        </div>
        <div className="agenda-text">
          <div className="agenda-des">
            A hackathon is an intense, collaborative event where individuals or
            teams come together to ideate, develop, and present innovative
            solutions to a specific problem or challenge within a limited
            timeframe. Typically spanning anywhere from a few hours to multiple
            days, these events foster a dynamic environment of creativity and
            rapid prototyping. Hackathons attract a diverse range of
            participants, including programmers, designers, engineers, and
            business professionals, who work synergistically to transform their
            ideas into tangible products or services.
          </div>
        </div>
      </div>
      <div className="parent-vision">
        <div className="vision" ref={visionRef}>
          <div className="about-vision-title" ref={visionTitleRef}>
            Image here?
          </div>
          <div className="about-vision-description" ref={visionDescriptionRef}>
            Our vision is to create a dynamic platform that ignites innovation,
            fosters collaboration, and empowers a new generation of
            problem-solvers. By organizing a hackathon, we aim to cultivate an
            ecosystem where brilliant minds converge to tackle pressing
            challenges and develop groundbreaking solutions.
          </div>
        </div>
        <div className="mission" ref={missionRef}>
          <div className="about-mission-title" ref={missionTitleRef}>
            Image here?
          </div>
          <div className="about-mission-description" ref={missionDescriptionRef}>
            Our mission is to catalyze innovation by providing a platform for
            aspiring technologists and problem-solvers to collaborate, learn,
            and create impactful solutions. We aim to foster a culture of
            experimentation and rapid prototyping, empowering participants to
            push the boundaries of technology and address real-world challenges.
            Through our hackathon, we strive to nurture a diverse community of
            innovators, providing them with the resources, mentorship, and
            support needed to transform their ideas into reality.
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default agenda;