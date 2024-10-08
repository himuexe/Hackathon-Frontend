import React from "react";
import { motion } from "framer-motion";
import "./sponsors.css";
import Faqs from "./faqs"
import Contact from "./contact"
import Coordinators from "./coordinators"

const sponsors = () => {
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="parent-sponsors"
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="sponsors-title"
        >
          Sponsors
          <img src="/images/rightarrow.png" alt="arrow-logo" />
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="sponsors-container"
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="sponsors-border"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="sponsors-image"
            >
              <img src="/images/srm.webp" alt="SRM" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="sponsors-container-sub"
            >
              <h1 className="sponsor-title">
                <a href="https://www.srmist.edu.in/" target="_blank">
                  {" "}
                  SRM UNIVERSITY{" "}
                </a>
              </h1>
            </motion.div>
          </motion.div>
        </motion.div>
        <Faqs/>
        <Contact />
        <Coordinators/>
      </motion.div>
    </React.Fragment>
  );
};

export default sponsors;