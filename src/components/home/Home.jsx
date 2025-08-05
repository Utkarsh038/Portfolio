import { useState } from 'react'

import {BrowserRouter, Router, Route} from "react-router"

import Hero from '../Hero/Hero'
import Skills from '../Skills/Skills'
import Navbar from '../Navbar/Navbar'
import WorkExprience from '../WrokExperience/workExprience'
import ContactMe from '../ContactMe/ContactMe'
import Work from '../Work/Work'
import Projects from '../Projects/Projects'
import Footer from "../Footer/Fotter"


import React from 'react'
import Soundbar from '../Soundbar'


function Home() {
  return (
    <div>
        <Navbar />
        <div className="container">
        <Hero />
         
        <Skills />
        <WorkExprience />
        <Projects />
        {/* <Work /> */}
        <ContactMe />
        <div style={{height:"20vh"}}/>
        <div />
      </div>
      <Footer />

    </div>
  )
}

export default Home
