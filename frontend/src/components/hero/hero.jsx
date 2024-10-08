import "./hero.css";
import React from "react";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import ReactGA from "react-ga";

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
    </React.Fragment>
  );
};

export default hero;