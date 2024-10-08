import React from "react";
import { motion, useInView } from "framer-motion";
import "./coordinators.css";

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const coordinators = () => {
  const ref = React.createRef();
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <React.Fragment>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.5 }}
        className="parent-convener"
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="convener-title"
        >
          <img src="/images/rightarrow.png" alt="" className="convener-logo" />
          <h1 className="convener-title-name">Coordinators</h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1.5, delay: 1 }}
          className="convener-container"
        >
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="convener-card"
          >
            <img
              className="convener-card-image"
              src="/images/salman.jpg"
              alt="Salman Khan"
            />
            <h1 className="convener-name">Salman Khan</h1>
            <h1 className="convener-position">
              Assistant Professor - Blockchain
            </h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="convener-card"
          >
            <img
              className="convener-card-image"
              src="/images/shahruk.jpg"
              alt="Shahruk Khan"
            />
            <h1 className="convener-name">Shahruk Khan</h1>
            <h1 className="convener-position">
              Assistant Professor - Big Data 
            </h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </React.Fragment>
  );
};

export default coordinators;