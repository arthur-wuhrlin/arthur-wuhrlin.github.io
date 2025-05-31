import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Step 1: Initial State (useState)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light'; // Default to light if no localStorage and no dark preference
  });

  // Step 2: toggleTheme Function
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme); // Save explicit choice to localStorage
      return newTheme;
    });
  };

  // Step 3: System Theme Change Listener (useEffect for prefers-color-scheme)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      // Only change theme if user hasn't made an explicit choice via toggleTheme (i.e., no theme in localStorage)
      if (localStorage.getItem('theme') === null) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    // Initial check for system theme preference, but only if no theme is in localStorage.
    // This handles cases where system theme changes while the app is not open,
    // and no localStorage override exists.
    if (localStorage.getItem('theme') === null) {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []); // Empty dependency array: runs once on mount, cleans up on unmount

  // Step 4: DOM Class Application (useEffect for theme state)
  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]); // Runs whenever the theme state changes

  // Step 5: Context Provider Value
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 6: useTheme hook implicitly updated as ThemeContext.Provider provides theme and toggleTheme
export const useTheme = () => useContext(ThemeContext);
