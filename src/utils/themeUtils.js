// Theme utility functions
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const getInitialTheme = () => {
  try {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      return savedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEMES.DARK;
    }

    // Default to dark theme
    return THEMES.DARK;
  } catch (error) {
    console.warn('Error getting initial theme:', error);
    return THEMES.DARK;
  }
};

export const setTheme = (theme) => {
  try {
    if (!Object.values(THEMES).includes(theme)) {
      console.warn('Invalid theme:', theme);
      return false;
    }

    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    return true;
  } catch (error) {
    console.error('Error setting theme:', error);
    return false;
  }
};

export const getTheme = () => {
  try {
    return localStorage.getItem('theme') || THEMES.DARK;
  } catch (error) {
    console.warn('Error getting theme from localStorage:', error);
    return THEMES.DARK;
  }
};

// Listen for system theme changes
export const setupSystemThemeListener = (callback) => {
  try {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e) => {
        // Only update if no manual theme preference is saved
        const savedTheme = localStorage.getItem('theme');
        if (!savedTheme && callback) {
          callback(e.matches ? THEMES.DARK : THEMES.LIGHT);
        }
      };
      
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  } catch (error) {
    console.warn('Error setting up system theme listener:', error);
    return () => {}; // Return empty cleanup function
  }
};
