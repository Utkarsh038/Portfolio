import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';
import { getInitialTheme, setTheme, THEMES } from '../../utils/themeUtils';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const initialTheme = getInitialTheme();
      setIsDark(initialTheme === THEMES.DARK);
      setTheme(initialTheme);
      setIsLoading(false);
    } catch (error) {
      console.error('Error initializing theme:', error);
      // Fallback to dark theme
      setIsDark(true);
      setTheme(THEMES.DARK);
      setIsLoading(false);
    }
  }, []);

  const toggleTheme = () => {
    try {
      const newTheme = isDark ? THEMES.LIGHT : THEMES.DARK;
      const success = setTheme(newTheme);
      
      if (success) {
        setIsDark(!isDark);
        
        // Dispatch custom event for other components
        window.dispatchEvent(new CustomEvent('themeChanged', { 
          detail: { theme: newTheme } 
        }));
      }
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="theme-toggle loading">
        <div className="toggle-slider">⚡</div>
      </div>
    );
  }

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme} 
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className={`toggle-slider ${isDark ? 'dark' : 'light'}`}>
        {isDark ? '🌙' : '☀️'}
      </div>
    </button>
  );
};

export default ThemeToggle;
