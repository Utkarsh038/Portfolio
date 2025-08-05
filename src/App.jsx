import React, { useEffect } from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router"
import ScrollReveal from 'scrollreveal';
import { Toaster } from 'react-hot-toast'
import Home from './components/home/Home.jsx'
import ProjectFrontend from './components/Projects/ProjectFrontend.jsx'
import ProjectUI from './components/Projects/ProjectUI.jsx'
import Soundbar from './components/Soundbar'

function App() {
  
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(".skills-container", { origin: "left", delay: 1000 });
  }, []);

  return (
    <>
    
    <BrowserRouter>
      <Soundbar />
    <Routes>
    
        <Route path="/" element={<Home />}>
          <Route index  element={<ProjectFrontend />}/>
        
           <Route index path="/frontend" element={<ProjectFrontend />}/>
           <Route index path="/uiux" element={<ProjectUI />}/>
        </Route>
       
      </Routes>
    
    
    <Toaster />
    </BrowserRouter>
    </>
  )
}

export default App
