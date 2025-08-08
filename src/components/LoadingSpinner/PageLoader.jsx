import React, { useEffect, useState } from 'react';
import './PageLoader.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { getTheme, THEMES } from '../../utils/themeUtils';

const PageLoader = () => {
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    // Listen for theme changes (if your app supports it)
    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`page-loader-bg ${theme}`}> {/* theme class for CSS */}
      <div className="page-loader-content">
        <div className="welcome-animated-text">WELCOME</div>
        <LoadingSpinner size="large" color="var(--accent-color, #64b5f6)" />
        <div className="page-loader-text">Loading Portfolio...</div>
      </div>
    </div>
  );
};

export default PageLoader;
