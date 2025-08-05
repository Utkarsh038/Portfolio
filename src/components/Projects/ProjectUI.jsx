
import React from 'react'
import ProjectCard from './ProjectCard'
import img1 from "../../../public/images/figma.png"
import img2 from "../../../public/images/behance.png"
import image from "../../../public/images/loan.jpg"
import image1 from "../../../public/images/service.png"
import image2 from "../../../public/images/realstate.jpg"
import image3 from "../../../public/images/betting.jpg"
import image4 from "../../../public/images/beautyapp.png"
import image5 from "../../../public/images/agency.jpg"

function ProjectUI() {
  return (
    <div>
      <div className="project-container">
        
    <ProjectCard 
    title={"Loan App UI/UX"}
    description={"A user-friendly loan app UI/UX design focusing on simplicity, accessibility, seamless navigation, and intuitive interactions."}
    mainImage={image}
    img1={img1}
    img2={img1}
    img3={img2}
    link={"https://www.figma.com/design/8NFJxmUlP9TanLIYHtqYrs/prime-loan?node-id=0-1&node-type=canvas&t=Xvbci6pmUIsOS89n-0"}
    />
        
    <ProjectCard 
    title={"Service App UI/UX"}
    description={"A sleek service app UI/UX design ensuring intuitive navigation, user-friendly interface, and seamless accessibility for all."}
    mainImage={image1}
    img1={img1}
    img2={img1}
    img3={img1}
    link={"https://www.figma.com/design/QVnZOr6NkrHIUxKWBInl8y/Service-App_Client?t=f9fY0MxpX3gFHFMr-0"}
    />
    <ProjectCard 
    title={"Real State Website"}
    description={"A modern real estate website UI/UX design featuring intuitive navigation, property listings, and seamless user experience."}
    mainImage={image2}
    img1={img1}
    img2={img1}
    img3={img2}
    link={"https://www.figma.com/design/hgkWZeZFd5cjmGZzQRxtri/Bosundhara-Real-State?t=f9fY0MxpX3gFHFMr-0"}
    />
    <ProjectCard 
    title={"Betting App UI/UX"}
    description={"A dynamic betting app UI/UX design featuring smooth navigation, quick access, and an engaging user interface."}
    mainImage={image3}
    img1={img1}
    img2={img1}
    img3={img1}
    link={"https://www.figma.com/community/file/1390227791271538954"}
    />
    <ProjectCard 
    title={"Beauty App UI/UX"}
    description={"A modern real estate website UI/UX design featuring intuitive navigation, property listings, and seamless user experience."}
    mainImage={image4}
    img1={img1}
    img2={img1}
    img3={img2}
    link={"https://www.behance.net/gallery/200693385/BeautyCosmetics-App-UI-Design"}
    />
    <ProjectCard 
    title={"Agency Website"}
    description={"A modern agency website UI/UX design with clean layout, intuitive navigation, and engaging user experience."}
    mainImage={image5}
    img1={img1}
    img2={img1}
    img3={img1}
    link={"https://www.behance.net/gallery/201605591/Agency-Website"}
    />

      </div>
    </div>
  )
}

export default ProjectUI
