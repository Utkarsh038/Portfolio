import React from 'react'
import { NavLink, Outlet } from 'react-router'
import "./Projects.css"
import ProjectCard from './ProjectCard'
import ProjectFrontend from './ProjectFrontend'
import { motion } from "framer-motion";


const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Initial state: faded out and slightly below
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    },
  },
};

function Projects() {
  return (
    <div className="project-main-container">
      <motion.h2 initial="hidden"
    animate="visible"
    viewport={{ once: false, amount: 0.4 }} // Triggers animation when 20% of the card is visible
    variants={cardVariants} >Recent Projects</motion.h2>
     <div className="project-name">
      <NavLink className="nav-link" to="/Frontend">Frontend</NavLink>
      {/* <NavLink className="nav-link" to="/uiux">UI/UX</NavLink> */}
     </div>

     <Outlet />
    </div>
  )
}

export default Projects
