"use client"

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme') || 'light';
  //   setTheme(savedTheme);
  //   document.body.className = savedTheme; // Apply the theme to the body
  // }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme; // Apply the theme to the body
    localStorage.setItem('theme', newTheme); // Save the theme in local storage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
