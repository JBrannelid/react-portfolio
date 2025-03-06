import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * AppContext.jsx
 *
 * This file creates a shared state container for our app that handles:
 * 1. Light/dark theme switching
 * 2. Basic tracking of which section is active
 */

const AppContext = createContext();

export function AppProvider(props) {
  // ------ THEME HANDLING ------
  // Create state for theme (light or dark)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Function to switch between light and dark theme
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  // Apply theme changes whenever theme state changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);

    // Update browser theme color for mobile
    const mobileThemeColor = theme === "dark" ? "#1e2430" : "#b39b91";
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", mobileThemeColor);
  }, [theme]);

  // ------ ACTIVE SECTION TRACKING ------

  // Create state for which section is active (default to home)
  const [activeSection, setActiveSection] = useState("home");

  // Get current URL path from React Router
  const location = useLocation();

  // Use scroll position to track active sections
  useEffect(() => {
    function checkActiveSection() {
      // Get all sections with IDs
      const sections = document.querySelectorAll("section[id]");
      if (sections.length === 0) return;

      // Get the middle of the viewport
      const viewportMiddle = window.innerHeight / 2;

      // Track the closest section to the middle
      let closestSection = null;
      let closestDistance = Infinity;

      // Check each section's distance to the middle of the screen
      sections.forEach((section) => {
        // Get section position relative to viewport
        const rect = section.getBoundingClientRect();
        // Calculate middle of the section
        const sectionMiddle = rect.top + rect.height / 2;
        // Calculate distance to viewport middle
        const distance = Math.abs(sectionMiddle - viewportMiddle);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        setActiveSection(closestSection.id);
      }
    }

    // Run on scroll
    window.addEventListener("scroll", checkActiveSection);
    checkActiveSection();

    // Clean up function
    return () => {
      window.removeEventListener("scroll", checkActiveSection);
    };
  }, []);

  // Update active section when URL changes
  useEffect(() => {
    // Get section name from URL or use "home"
    const sectionName = location.pathname.slice(1) || "home";
    setActiveSection(sectionName);
  }, [location]);

  // Create the object of values we want to share
  const contextValue = {
    theme,
    toggleTheme,
    activeSection,
    setActiveSection,
  };

  // Provide the context values to all child components
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}

// Hook to access all context values
export function useApp() {
  const context = useContext(AppContext);
  return context;
}

// Hook for just theme-related values
export function useTheme() {
  const { theme, toggleTheme } = useApp();
  return { theme, toggleTheme };
}

//Hook for just section-related values
export function useActiveSection() {
  const { activeSection, setActiveSection } = useApp();
  return { activeSection, setActiveSection };
}
