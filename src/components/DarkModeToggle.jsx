import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  // Check if user has a saved preference or use system preference
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }

      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }

    return 'light'; // Default theme if no preference found
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';

  // Apply the theme class to the document
  const applyTheme = (newTheme) => {
    const root = window.document.documentElement;
    
    // Remove the previous theme class
    const oldTheme = newTheme === 'dark' ? 'light' : 'dark';
    root.classList.remove(oldTheme);
    
    // Add the new theme class
    root.classList.add(newTheme);
    
    // Save preference to localStorage
    localStorage.setItem('color-theme', newTheme);
  };

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Apply theme when component mounts or theme changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return {
    isDarkMode: isDark,
    toggleDarkMode: toggleTheme
  };
};

export default DarkModeToggle;