
import React from 'react'
import "./ProjectFrontend.css"
import ProjectCard from './ProjectCard'
import img1 from "../../../public/images/html.png"
import img2 from "../../../public/images/css.png"
import img3 from "../../../public/images/react.png"
import image from "../../../public/images/Study_Notion.png"
import image2 from "../../../public/images/portfolio2.jpg"
import image3 from "../../../public/images/AI_Career.png"
import image4 from "../../../public/images/task.png"


function ProjectFrontend() {
  return (
    <div className="project-container">

    <ProjectCard 
    title={"Study Notion"}
    description={"A comprehensive study management tool designed to help students organize their notes, assignments, and schedules effectively."}
    mainImage={image}
    img1={img1}
    img2={img2}
    img3={img3}
    link = {"http://study-rouge-three.vercel.app/"}
    />
    <ProjectCard 
    title={"Portfolio Website"}
    description={"A responsive portfolio website highlighting skills, projects, and achievements with sleek design and intuitive navigation."}
    mainImage={image2}
    img1={img1}
    img2={img2}
    img3={img3}
     link = {"https://delightful-pudding-133fa3.netlify.app/"}
    />
    <ProjectCard 
    title={"AI Career Website"}
    description={"An AI-driven career guidance platform that offers personalized job recommendations and skill development resources."}
    mainImage={image3}
    img1={img1}
    img2={img2}
    img3={img3}
    link = {"https://ai-career-pearl.vercel.app/"}
    />
    <ProjectCard 
    title={"Task Management Website"}
    description={"Task management website enabling admins to assign, and monitor employee tasks with streamlined efficiency."}
    mainImage={image4}
    img1={img1}
    img2={img2}
    img3={img3}
    link = {"https://github.com/Ronigit01/Task-Management-Website"}
    />
    
    </div>
    
  )
}

export default ProjectFrontend
