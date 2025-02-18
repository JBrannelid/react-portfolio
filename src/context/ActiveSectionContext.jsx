import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Create a context for tracking the active section
const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
  // Initialize state with 'home' as default active section
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // Setup intersection observer to track visible sections
  useEffect(() => {
    const options = {
      root: null, // Use viewport as root
      rootMargin: "-50% 0px", // Trigger when element is 50% in view
      threshold: 0, // Trigger as soon as any part of element is visible
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
      }
    }, options);

    // Function to observe all sections
    const observeSections = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        observer.observe(section);
      });
    };

    // Initial observation
    observeSections();

    // Set up a MutationObserver to detect when new sections are added (for lazy loading)
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldReobserve = false;

      mutations.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          // Check if any of the added nodes are sections or contain sections
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
              // Element node
              if (node.tagName === "SECTION" || node.querySelector("section")) {
                shouldReobserve = true;
              }
            }
          });
        }
      });

      if (shouldReobserve) {
        // Re-observe all sections after DOM changes
        observeSections();
      }
    });

    // Start observing the document body for DOM changes
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup function
    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []); // Only runs once on mount

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
