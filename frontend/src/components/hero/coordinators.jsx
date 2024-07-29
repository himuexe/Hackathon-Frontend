import React from "react";
import "./convener.css";
const coordinators = () => {
  return (
    <React.Fragment>
      <div className="parent-convener">
        <div className="convener-title">
          <img src="/images/rightarrow.png" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Coordinators</h1>
        </div>

        <div className="convener-container">
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/salman.jpg"
              alt="Salman Khan"
            />
            <h1 className="convener-name">Salman Khan</h1>
            <h1 className="convener-position">
              Assistant Professor - Blockchain
            </h1>
          </div>
          <div className="convener-card">
            <img
              className="convener-card-image"
              src="/images/shahruk.jpg"
              alt="Shahruk Khan"
            />
            <h1 className="convener-name">Shahruk Khan</h1>
            <h1 className="convener-position">
              Assistant Professor - Big Data 
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default coordinators;
