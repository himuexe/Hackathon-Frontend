import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Agenda from "./components/hero/agenda"
import Schedule from "./components/hero/schedule"
import Sponsors from "./components/hero/sponsors"
import Footer from "./components/footer/footer"
const App = () => {
  return (
    <div className="bg">
      <Navbar />
      <Hero/>
      <div className="bg-sep"></div>
      <Agenda />
      <div className="bg-sep"></div>
      <Schedule />
      <div className="bg-sep"></div>
      <Sponsors />
      <Footer />
      <div className="bg-sep"></div>
    </div>
  );
};

export default App;
