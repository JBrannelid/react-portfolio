import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./sections/Home";
import { AppProvider } from "../context/AppContext";

/**
 * This component defines the structure of the entire application:
 * 1. It renders the navigation bar
 * 2. It loads and displays all the different sections of the site
 * 3. It handles scrolling to the correct section when URLs change
 * 4. It adds visual dividers between sections
 */

// Improves initial page load time by only loading section when needed
const About = React.lazy(() => import("./sections/About"));
const Experience = React.lazy(() => import("./sections/Experience"));
const Portfolio = React.lazy(() => import("./sections/Portfolio"));
const Contact = React.lazy(() => import("./sections/Contact"));
const Skills = React.lazy(() => import("./sections/Skills"));
const Footer = React.lazy(() => import("./sections/Footer"));

// LoadingSpinner displayed while a section is being loaded
function LoadingSpinner({ sectionId }) {
  return (
    <div
      id={sectionId}
      className="flex items-center justify-center min-h-[50vh]"
    >
      <div className="w-12 h-12 border-4 border-[var(--accent-orange-color)] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

// Creates a visual divider between sections
function SectionDivider() {
  return (
    <div className="my-20">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--accent-orange-color)] to-transparent" />
    </div>
  );
}

// Wrapper for each section with consistent styling and structure
function Section({ id, children, isHome }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 relative ${isHome ? "min-h-screen" : "min-h-screen"}`}
      data-section-id={id}
    >
      <div className={`${isHome ? "" : "py-20"}`}>{children}</div>
      {!isHome && <SectionDivider />}
    </section>
  );
}

// Main component that structures the entire application
function Layout() {
  const location = useLocation();

  // Handle scrolling to sections when route changes and ensures smooth navigation
  React.useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    const element = document.getElementById(path);

    if (element) {
      const navbarHeight = 100; // Account for navbar height when scrolling
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      // Smooth scroll to the target section
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    // AppProvider tracks which section is currently visible
    <AppProvider>
      <div className="relative">
        {/* Fixed navigation bar */}
        <Navbar />

        <div className="pt-24">
          {/* Home Section - Not lazy loaded since it's the first visible section */}
          <Section id="home" isHome>
            <Home />
          </Section>

          {/* About Section */}
          <Suspense fallback={<LoadingSpinner sectionId="about" />}>
            <Section id="about">
              <About />
            </Section>
          </Suspense>

          {/* Skills Section */}
          <Suspense fallback={<LoadingSpinner sectionId="skills" />}>
            <Section id="skills">
              <Skills />
            </Section>
          </Suspense>

          {/* Portfolio Section */}
          <Suspense fallback={<LoadingSpinner sectionId="portfolio" />}>
            <Section id="portfolio">
              <Portfolio />
            </Section>
          </Suspense>

          {/* Experience Section */}
          <Suspense fallback={<LoadingSpinner sectionId="experience" />}>
            <Section id="experience">
              <Experience />
            </Section>
          </Suspense>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen scroll-mt-24 relative">
            <Suspense fallback={<LoadingSpinner sectionId="contact" />}>
              <Contact />
            </Suspense>
          </section>

          {/* Footer */}
          <Suspense>
            <Footer />
          </Suspense>
        </div>
      </div>
    </AppProvider>
  );
}

export default Layout;
