import React, { useEffect, useState, Suspense } from 'react';
import './App.css'
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import ScrollReveal from 'scrollreveal';
import { Toaster } from 'react-hot-toast';
const Home = React.lazy(() => import('./components/home/Home.jsx'));
const ProjectFrontend = React.lazy(() => import('./components/Projects/ProjectFrontend.jsx'));
const ProjectUI = React.lazy(() => import('./components/Projects/ProjectUI.jsx'));
const Soundbar = React.lazy(() => import('./components/Soundbar'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound.jsx'));
import PageLoader from './components/LoadingSpinner/PageLoader';
import AnimatedRoutes from './components/AnimatedRoutes';

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

  // Simulate loading for 0.5s or until page is ready (smoother)
  const timer = setTimeout(() => setLoading(false), 500);
  return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Soundbar />
        <AnimatedRoutes>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<ProjectFrontend />} />
              <Route path="frontend" element={<ProjectFrontend />} />
              <Route path="uiux" element={<ProjectUI />} />
            </Route>
            {/* Catch-all route for 404 pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatedRoutes>
        <Toaster />
      </Suspense>
    </BrowserRouter>
  );
}

export default App
