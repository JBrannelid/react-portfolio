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
      threshold: 0, // Trigger as soon as any part of the element is visible
    };

    // Create an Intersection Observer to track which sections are in view
    const observer = new IntersectionObserver((entries) => {
      // Filter for the element that is most visible (largest intersection ratio)
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .reduce(
          (max, current) =>
            !max || current.intersectionRatio > max.intersectionRatio
              ? current
              : max,
          null
        );

      if (visibleEntry) {
        // Update active section only if we have a visible entry
        setActiveSection(visibleEntry.target.id);
        console.log("Currently visible section:", visibleEntry.target.id); // Debug line
      }
    }, options);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
      console.log("Observing section:", section.id); // Debug line
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []); // only runs once on mount

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
