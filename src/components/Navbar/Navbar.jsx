import React, { useState } from 'react'
import "./Navbar.css"
import { IoClose, IoMenu, } from "react-icons/io5";
import MobileNav from './MobileNav/MobileNav';
import { RiMenu4Fill } from "react-icons/ri";
import {Link} from "react-scroll";
import Soundbar from '../Soundbar';
import ThemeToggle from '../ThemeToggle/ThemeToggle';



function Navbar() {

  const [openmenu, setopenmenu] = useState(false);

  const togglemenu = () =>{
    setopenmenu(!openmenu);
  }
  return (
    <>

  <MobileNav isOpen={openmenu} toggleMenu={togglemenu} />
    <div>
      <nav className="nav-wrapper">

        <div className="nav-content">
            <img src="./images/file.svg" alt="utkarsh-raj" />

            <ul>
    <li className="soundbar-wrapper">
        <Soundbar />
    </li>
    <li className="theme-toggle-wrapper">
        <ThemeToggle />
    </li>
    <li>
        <Link to="hero-container" spy={true} smooth={true} offset={0} duration={500} className="menu-item">Home</Link>
    </li>
    <li>
        <Link to="skills-container" spy={true} smooth={true} offset={0} duration={500} className="menu-item">Skills</Link>
    </li>
    <li>
        <Link to="experience-container" spy={true} smooth={true} offset={0} duration={500} className="menu-item">Work Experience</Link>
    </li>
    <li>
        <Link to="project-main-container" spy={true} smooth={true} offset={0} duration={500} className="menu-item">Projects</Link>
    </li>
    <li>
        <Link to="contact-container" spy={true} smooth={true} offset={-200} duration={500} className="menu-item">Contact Me</Link>
    </li>
    <li>
        <Link to="contact-container" spy={true} smooth={true} offset={-200} duration={500}>
            <button className="contact-btn">Hire Me</button>
        </Link>
    </li>
</ul>


            <button className="menu-btn" onClick={togglemenu}>
                <span className={"meterial-symbols-outlined"}
                style={{fontSize:"1.8rem"}}>
                   {openmenu ? <IoClose />:<RiMenu4Fill />}
                </span>
            </button>
        </div>

      </nav>
    </div>
    </>
  )
}

export default Navbar
