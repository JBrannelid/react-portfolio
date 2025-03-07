import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // Function to handle scroll and update the active section
  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const viewportMiddle = window.innerHeight / 2;

    let closestSection = { element: null, distance: Infinity };

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - viewportMiddle);

      if (distance < closestSection.distance) {
        closestSection = { element: section, distance };
      }
    });

    if (closestSection.element) {
      setActiveSection(closestSection.element.id);
    }
  };

  // Function to update the active section based on the URL
  const updateActiveSectionFromUrl = () => {
    const sectionName = location.pathname.slice(1) || "home";
    setActiveSection(sectionName);
  };

  // Update active section when URL changes
  useEffect(() => {
    updateActiveSectionFromUrl();
  }, [location]);

  // Effect to listen to scroll events and update the active section
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run immediately to set the initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

// Hook to get and set the active section
export function useActiveSection() {
  const context = useContext(NavigationContext);
  return {
    activeSection: context.activeSection,
    setActiveSection: context.setActiveSection,
  };
}
