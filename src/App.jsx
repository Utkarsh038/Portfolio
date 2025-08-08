import React, { useEffect, useState } from 'react';
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ScrollReveal from 'scrollreveal';
import { Toaster } from 'react-hot-toast';
import Home from './components/home/Home.jsx';
import ProjectFrontend from './components/Projects/ProjectFrontend.jsx';
import ProjectUI from './components/Projects/ProjectUI.jsx';
import Soundbar from './components/Soundbar';
import NotFound from './components/NotFound/NotFound.jsx';
import PageLoader from './components/LoadingSpinner/PageLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });
    sr.reveal(".skills-container", { origin: "left", delay: 1000 });

    // Simulate loading for 1.2s or until page is ready
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <BrowserRouter>
        <Soundbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<ProjectFrontend />} />
            <Route path="frontend" element={<ProjectFrontend />} />
            <Route path="uiux" element={<ProjectUI />} />
          </Route>
          {/* Catch-all route for 404 pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App
