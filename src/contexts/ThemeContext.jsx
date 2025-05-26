import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Step 2: Initialize theme state based on system preference
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light'; // Default to light
  });

  // Step 3: useEffect to listen for changes in system theme preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    // Initial check for the theme, in case it changed between useState and this effect
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []); // Empty dependency array: runs once on mount, cleans up on unmount

  // Step 4: useEffect to apply the theme class to document.body
  useEffect(() => {
    document.body.className = ''; // Clear existing classes
    document.body.classList.add(theme);
    // localStorage.setItem('theme', theme); // Step 1: Removed localStorage
  }, [theme]); // Runs whenever the theme state changes

  // Step 5: toggleTheme function removed

  // Step 6: Update ThemeContext.Provider value
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 7: useTheme hook implicitly updated as ThemeContext.Provider only provides theme
export const useTheme = () => useContext(ThemeContext);
