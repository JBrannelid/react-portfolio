import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Create a context for tracking the active section. Will highligt active section on SPA-application base on viewport section
const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
  // Initialize state with 'home' as default active section
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // rootMargin of -50% means element must be at least halfway in view
  useEffect(() => {
    const options = {
      root: null, // Use viewport as root
      rootMargin: "-50% 0px", // Trigger when element is 50% in view
      threshold: 0,
    };

    // Create an Intersection Observer to track which sections are in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Select all sections with IDs and observe them
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Update active section when route changes
  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    setActiveSection(path);
  }, [location]);

  // Provide the active section context to child components
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }
  return context;
};
