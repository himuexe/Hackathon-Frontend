import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion, useInView } from "framer-motion";
import "./faqs.css";
import ReactGA from "react-ga";

const faqs = () => {
  const handleArrow = (element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "FAQs",
    });
    const elementVisible = element.currentTarget.querySelector(
      ".faqs-content-description"
    );
    const arrow = element.currentTarget.querySelector(".faqs-arrow");

    elementVisible.classList.toggle("faq-visible");
    arrow.classList.toggle("arrow-transform");
  };

  const styles = {
    container: {
      position: "relative",
      zIndex: "-1",
      fontSize: "2.5vw",
      transition: "all 0.3s linear",
      cursor: "pointer",
    },
  };

  if (window.innerWidth <= 768) {
    styles.container = {
      ...styles.container,
      fontSize: "5vw",
    };
  }

  const faqItems = [
    {
      title: "What is a hackathon?",
      description:
        "A hackathon is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program or a hardware solution for the provided problem statements.",
    },
    {
      title: "Who can participate?",
      description: "This is open to all undergraduate students from SRM.",
    },
    {
      title: "How much is the registration fee?",
      description:
        "After the scrutiny process, the organizing committee will release the shortlisted teams for the finale. The selected team must pay a registration fee of Rs. 1000/- per team, which includes GST. It contributes to goodie bags, food, and refreshments served during the event. The registration fee is non-refundable and non-transferable. Teams are advised to complete the registration process as soon as possible to secure their participation in the event. Upon successful completion of the registration, teams will receive further instructions from the organizing committee.",
    },
    {
      title: "Is the hackathon online or offline?",
      description:
        "The first round will be abstract submission which is completely done in virtual mode. Further upon registration, you will be contacted by our team and given a brief on the process of abstract submission. The shortlisted team should appear physically for the final.",
    },
    {
      title: "How to register for the hackathon?",
      description:
        "Click the register button on the home page and you will be directed to the respective Google form. Kindly submit the required details and our organizing team will contact you as soon as possible.",
    },
    {
      title: "What is the prize money of the winning team?",
      description: "The event has a prize pool of Rs 25,000 for the winners.",
    },
    {
      title: "What is the team size to participate in the Hackathon?",
      description:
        "The teams must have a minimum of 2 members and a maximum of 3 members.",
    },
    {
      title: "What are the prerequisites considered for registering?",
      description:
        "Participants may need to have knowledge and skills in areas such as electronics, programming, data analytics, and IoT technologies, depending on the theme of the hackathon. Participants must need to bring their own laptops, sensors, microcontrollers, and other necessary tools and equipment.",
    },
  ];

  const ref = React.createRef();
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <React.Fragment>
      <div id="faqs" className="parent-faqs">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="faqs-title"
        >
          <img src="/images/rightarrow.png" alt="arrow-logo" />
          FAQs
        </motion.h1>

        <div className="faqs-section" ref={ref}>
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="faqs-content"
              onClick={handleArrow}
            >
              <motion.h1
                initial={{ opacity:  0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="faqs-content-title"
              >
                {item.title}
                <ChevronRightIcon
                  style={styles.container}
                  className="faqs-arrow"
                />
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="faqs-content-description"
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default faqs;