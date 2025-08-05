import React from 'react';
import "./ExperienceCard.css";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: 0,
    y: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

function ExperienceCard({ details }) {
  return (
    <div >
      <div className="work-experience-card">
        <h6>{details.title}</h6>
        <div className="work-duration">{details.date}</div>
        <ul>
          {details.reponsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
