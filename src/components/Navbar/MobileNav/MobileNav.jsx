import React from 'react'
import "./MobileNav.css"
import {Link} from "react-scroll";
const MobileNav = ({isOpen , toggleMenu}) => {
    return (
        <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>

        <div className="mobile-menu-container">
            
         <p style={{lineHeight:"0"}}></p>

            <ul>
                <li>
                    <p  style={{lineHeight:"0",fontStyle:"cursive"}}>Utkarsh Raj</p>
                    <Link to="hero-container" spy={true} smooth={true} offset={-70} duration={500}  className="menu-item" onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                <Link to="skills-container" spy={true} smooth={true} offset={-70} duration={500} className="menu-item" onClick={toggleMenu}>Skills</Link>
                </li>
                <li>
                <Link to="experience-container" spy={true} smooth={true} offset={-70} duration={500} className="menu-item" onClick={toggleMenu}>Work Experience</Link>
                </li>
                <li>
                <Link to="project-main-container" spy={true} smooth={true} offset={-70} duration={500} className="menu-item" onClick={toggleMenu}>Projects</Link>
                </li>
                <li>
                    <Link to="contact-container" spy={true} smooth={true} offset={-70} duration={500} className="menu-item" onClick={toggleMenu}>Contact Me</Link>
                </li>
                <Link to="contact-container" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMenu} >
                <button className="contact-btn">Hire Me</button>
                </Link>
            </ul>
        </div>


        </div>
        </>
    )
}

export default MobileNav
