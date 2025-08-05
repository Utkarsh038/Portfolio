import React, { useState } from 'react'
import "./Skills.css"
import { SKILLS } from '../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillInfoCard from './SkillCard/SkillInfoCard/SkillInfoCard';
import LeetCodeStats from '../LeetCodeStats/LeetCodeStats';
// import {animate, motion} from "framer-motion"



// const variants = {
//   initial: {
//     x: 0,
//     y: 200,
//     opacity:0,
//   },
//   animate : {
//     x:0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       staggerChildren: 0.1,
//     }
//   }
// }

import {animate, motion} from "framer-motion"

const variants = {
  initial: {
    x: 0,
    y: 30,
    opacity:0,
  },
  animate : {
    x:0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      
    }
  }
}
function Skills() {

  const [ selectedskill , setselectedskill ] = useState(SKILLS[0]);

  const handelSelectedSkill = (data) => {
    setselectedskill(data);
  }

  return (
      <div >
      <section className="skills-container">
        <h5 >Technical Proficiency</h5>
        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item)=>{
                    return (

                        <SkillCard 
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedskill.title === item.title}
                        onClick={()=>{
                          handelSelectedSkill(item);
                        }}
                        />
                    )
                })}
            </div>

            <div className="skills-info">
              <SkillInfoCard 
              heading = {selectedskill.title}
              skills = {selectedskill.skills}
              />
            </div>
        </div>
        
        {/* Live LeetCode Progress */}
        <LeetCodeStats username="Utkarsh_Raj32" />
      </section>
      </div>
   
  )
}

export default Skills
