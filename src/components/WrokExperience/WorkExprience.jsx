import React from 'react'
import "./WorkExperience.css"
import {WORK_EXPERIENCE} from "../utils/data"
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from "react-slick"
import { useRef } from 'react'

import {animate, motion} from "framer-motion"

const variants = {
  initial: {
    x: 0,
    y: 100,
    opacity:0,
  },
  animate : {
    x:0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
    }
  }
}

function WorkExprience() {

  // const sliderRef = useRef();

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   reponsive: [
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     }
  //   ]
  // }



  return (
    <div >
      <section className="experience-container">
        <h5 >Work Experience</h5>

        <div className="experience-content">
          {/* <Slider  ref={sliderRef} {...settings}> */}
          {WORK_EXPERIENCE.map((item) => {
            return (
              <ExperienceCard 
              key={item.title}
              details={item}
              />

            )
          })}
          {/* </Slider> */}
        </div>
      </section>
    </div>
  )
}

export default WorkExprience
