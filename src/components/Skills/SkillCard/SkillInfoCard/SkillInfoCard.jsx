import React from 'react';
import "./SkillInfoCard.css"
import {motion,useInView} from "framer-motion"


function SkillInfoCard({ heading, skills }) {
    
    const fadeVariants = {
        hidden: { opacity: 0 }, // Initial state: fully transparent
        animate: { // "animate" represents the final state
          opacity: 1, // Fully opaque
          transition: { duration: 2, ease: "easeOut" }, // Smooth transition
        },
    }
    
  return (

    <div>
    <motion.div
        initial="hidden"
        whileInView="animate" // Animates only once
        variants={fadeVariants}>

        <div className="skills-info-card">
            <h6>{heading}</h6>

            <div className="skills-info-content">
                {skills.map((item, index) => {
                    return (

                    <React.Fragment key={`skill_${index}`}>

                        <div className="skill-info">
                            <p>{item.skill}</p>
                            <p className="percentage">{item.percentage}</p>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress" style= {{width:item.percentage}} />
                        </div>



                    </React.Fragment>
                    )
                })}
            </div>
        </div>
      
    </motion.div>
    </div>
  )
}

export default SkillInfoCard
