import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./sections/Home";

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
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

// Wrapper for each section. Necessary to keep padding for each section divider
function Section({ id, children, noDivider }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 relative min-h-screen"
      data-section-id={id}
    >
      {/* Add top padding for all section except noDivider */}
      <div className={noDivider ? "" : "py-20"}>{children}</div>
      {/* Show divider on all sections except home and contact */}
      {!noDivider && (
        <div className="my-20">
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--accent-orange-color)] to-transparent" />
        </div>
      )}
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
      const navbarHeight = 100; // Calculate scroll position (accounting for navbar height)
      const topPosition = element.offsetTop - navbarHeight;

      // Smooth scroll to section
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="relative">
      {/* Fixed navigation bar */}
      <Navbar />

      <div className="pt-24">
        {/* Home Section - Always loaded */}
        <Section id="home" noDivider>
          <Home />
        </Section>

        {/* About Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <Section id="about">
            <About />
          </Section>
        </Suspense>

        {/* Skills Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <Section id="skills">
            <Skills />
          </Section>
        </Suspense>

        {/* Portfolio Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <Section id="portfolio">
            <Portfolio />
          </Section>
        </Suspense>

        {/* Experience Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <Section id="experience">
            <Experience />
          </Section>
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <Section id="contact" noDivider>
            <Contact />
          </Section>
        </Suspense>

        {/* Footer */}
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default Layout;
