import React from 'react';
import "./SkilCard.css";

function SkillCard({ title, iconUrl, isActive, onClick }) {
  return (
    <div>
      <div className={`skills-card ${isActive ? "active" : ""}`} onClick={() => onClick()}>
        <div className="skill-icon">
          <img src={iconUrl} alt="" />
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default SkillCard;
