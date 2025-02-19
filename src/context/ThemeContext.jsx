import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check local storage for saved theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light"; // light as default
  });

  // Update root CSS variabels and save theme in local storage
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      document.querySelector("html").style.backgroundColor =
        "var(--primary-dark-bg)";
    } else {
      root.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      document.querySelector("html").style.backgroundColor =
        "var(--primary-bg)";
    }
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Return a theme context provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for footer.jsx to give access to theme and ToggleTheme function
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
