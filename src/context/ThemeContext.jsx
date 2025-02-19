import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check local storage for saved theme
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light"; // light as default
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === "dark") {
      root.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      document.querySelector("html").style.backgroundColor =
        "var(--primary-dark-bg)";
      body.style.backgroundColor = "var(--primary-dark-bg)";

      // For iOS devices to handle status bar area correctly
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#1e2430");
    } else {
      root.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      document.querySelector("html").style.backgroundColor =
        "var(--primary-bg)";
      body.style.backgroundColor = "var(--primary-bg)";

      // For iOS devices to handle status bar area correctly
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#b39b91");
    }

    // Force a repaint
    setTimeout(() => {
      window.scrollTo(0, window.scrollY + 1);
      window.scrollTo(0, window.scrollY - 1);
    }, 0);
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
