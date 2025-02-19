import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Apply theme changes to document
    document.documentElement.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);

    // Update theme color for mobile devices
    const themeColor = theme === "dark" ? "#1e2430" : "#b39b91";
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", themeColor);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
