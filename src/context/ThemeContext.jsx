import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Apply theme changes whenever theme state changes
  useEffect(() => {
    // Add or remove dark-mode class on the document element
    document.documentElement.classList.toggle("dark-mode", theme === "dark");

    // Save theme preference to localStorage
    localStorage.setItem("theme", theme);

    // Update mobile theme color
    const mobileThemeColor = theme === "dark" ? "#131b29" : "#96807a";
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", mobileThemeColor);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook for theme
export function useTheme() {
  const context = useContext(ThemeContext);
  return { theme: context.theme, toggleTheme: context.toggleTheme };
}
