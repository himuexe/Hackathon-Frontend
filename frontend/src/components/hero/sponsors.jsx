import React from "react";
import "./sponsors.css";
import Faqs from "./faqs"
import Contact from "./contact"
import Coordinators from "./coordinators"
const sponsors = () => {
  return (
    <React.Fragment>
      <div className="parent-sponsors">
        <h1 className="sponsors-title">
          Sponsor
          <img src="/images/rightarrow.png" alt="arrow-logo" />
        </h1>
        <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/srm.webp" alt="SRM" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://www.srmist.edu.in/" target="_blank">
                  {" "}
                  SRM UNIVERSITY{" "}
                </a>
              </h1>
            </div>{" "}
          </div>
        </div>
        <Faqs/>
        <Contact />
        <Coordinators/>
      </div>
    </React.Fragment>
  );
};

export default sponsors;
