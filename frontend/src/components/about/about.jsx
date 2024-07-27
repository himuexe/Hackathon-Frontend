import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./about.css";

const about = () => {
  const handleWebClicks = (webLink) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: webLink,
    });
    window.open(webLink);
  };
  useEffect(() => {
    document.title = "About Us";
    const observer = new IntersectionObserver(
      (entryies) => {
        entryies.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "about-left")
              entry.target.classList.add("aboutScrollAnimateLeft");
            if (entry.target.id == "about-right")
              entry.target.classList.add("aboutScrollAnimateRight");
          }
        });
      },
      {
        threshold: 1,
      }
    );
    const divs = document.querySelectorAll(
      ".foundation-title,.foundation-description,.about-srmvec-title,.about-srmvec-description,.about-csi-title,.about-csi-description,.about-whitehatians-title,.about-whitehatians-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  return (
    <React.Fragment>
      <div id="about" className="parent-about">
        <h1 className="about-title">About Us</h1>
        <div className="foundation">
          <div className="foundation-title " id="about-right">
            <img
              src="/images/acm.png"
              alt="srm logo"
              className="about-srm-logo"
            />
            ACM
          </div>
          <div className="foundation-description" id="about-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            corporis ut vitae eaque, fugiat nihil! Corporis porro repellat
            consequatur suscipit provident dolorem aliquid ut, perspiciatis
            fugiat, commodi fugit nihil dolore!
          </div>
        </div>

        <div className="srmvec">
          <div
            className="about-srmvec-title "
            id="about-left"
            onClick={() => handleWebClicks("https://www.srmvalliammai.ac.in")}
          >
            <img
              className="about-srmvec-logo"
              src="/images/srmvec.webp"
              alt=" logo"
            />
            Title
          </div>
          <div className="about-srmvec-description" id="about-right">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            odio, placeat saepe quidem sequi officia earum maxime officiis?
            Officiis unde quidem rerum, quibusdam ex tempora. Ratione nisi
            molestiae repellendus excepturi!
          </div>
        </div>
        <div className="csi">
          <div
            className="about-csi-title"
            id="about-right"
            onClick={() => handleWebClicks("http://www.csi-kancheepuram.org/")}
          >
            <img
              className="about-csi-logo"
              src="/images/csi1.webp"
              alt=" logo"
            />
            Title
          </div>
          <div className="about-csi-description" id="about-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            quasi consequuntur accusamus aperiam praesentium, amet libero
            asperiores ratione unde magnam, odit laborum sunt, facere ipsum vel
            ullam maxime natus tempora.
          </div>
        </div>
        <div className="whitehatians">
          <div
            className="about-whitehatians-title"
            id="about-left"
            onClick={() => handleWebClicks("https://www.whitehatians.tech")}
          >
            <img
              className="about-whitehatians-logo"
              src="/images/whitehatians.webp"
              alt=" logo"
            />
            Title
          </div>
          <div className="about-whitehatians-description" id="about-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum amet
            corporis modi unde aut architecto sit officiis accusamus debitis
            suscipit, sunt, cum eos blanditiis repellendus voluptatum sed
            laboriosam, quae voluptas.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default about;
