import React from "react";
import "./footer.css";
import { ReactComponent as Copyright } from "../../assets/copyright.svg";
const footer = () => {
  return (
    <React.Fragment>
      <div className="parent-footer">
        <p className="copyright">
          Copyrights
          <Copyright className="copyright-icon" />
          2024 - {"All Rights Reserved."}
        </p>
        <p className="copyright">
          Developed by {"  "}
          <a href="https://github.com/himuexe" target="_blank">
             Himanshu Sharma
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;
