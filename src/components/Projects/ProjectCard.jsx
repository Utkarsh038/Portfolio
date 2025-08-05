import React, { useState, useEffect } from 'react';
import "./ProjectCard.css";
import { NavLink } from 'react-router';
import { PiLinkSimpleBold } from "react-icons/pi";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial state: hidden and slightly below
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ProjectCard({ mainImage, title, description, img1, img2, img3, link }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(title); // Unique ID per project
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !hasAnimated) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount in case already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated, title]);

  return (
    <motion.div
      id={title} // Unique ID for tracking visibility
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"} // Animate only on first view
      variants={cardVariants}
    >
      <div className="project-card">
        <div className="project-image">
          <img src={mainImage} alt="" />
        </div>
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="project-skills">
          <div className="project-icon">
            <p><img src={img1} alt="" /></p>
            <p><img src={img2} alt="" /></p>
            <p><img src={img3} alt="" /></p>
          </div>
        </div>

        <NavLink to={link} className="projects-btn">
          <PiLinkSimpleBold style={{ fontSize: "0.9rem" }} />
          <span> Visit Project</span>
        </NavLink>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
