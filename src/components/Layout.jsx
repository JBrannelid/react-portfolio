import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import NavbarMain from "./navbar/NavbarMain";
import Home from "./sections/Home";
import { ActiveSectionProvider } from "../context/ActiveSectionContext";

// Improves initial page load time by only loading these components when needed.
// Exclude first section Home
const About = React.lazy(() => import("./sections/About"));
const Experience = React.lazy(() => import("./sections/Experience"));
const Portfolio = React.lazy(() => import("./sections/Portfolio"));
const Contact = React.lazy(() => import("./sections/Contact"));
const Skills = React.lazy(() => import("./sections/Skills"));
const Footer = React.lazy(() => import("./sections/Footer"));

// Loading spinner component shown while lazy-loaded components are being fetched
const LoadingSpinner = ({ sectionId }) => (
  <div id={sectionId} className="flex items-center justify-center min-h-[50vh]">
    <div className="w-12 h-12 border-4 border-[var(--accent-orange-color)] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Divider between sections for better visual organization
const SectionDivider = () => (
  <div className="my-20">
    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--accent-orange-color)] to-transparent" />
  </div>
);

// Consistent styling and structure for every section
const Section = ({ id, children, isHome }) => (
  <section
    id={id}
    className={`scroll-mt-24 relative ${isHome ? "min-h-screen" : "min-h-screen"}`}
    data-section-id={id}
  >
    <div className={`${isHome ? "" : "py-20"}`}>{children}</div>
    {!isHome && <SectionDivider />}
  </section>
);

const Layout = () => {
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
    // ActiveSectionProvider tracks which section is currently visible
    <ActiveSectionProvider>
      <div className="relative">
        {/* Fixed navigation bar */}
        <NavbarMain />

        <div className="pt-24">
          {/* Home Section - Not lazy loaded since it's the first visible section */}
          <Section id="home" isHome>
            <Home />
          </Section>

          {/* About Section - Lazy loaded to improve initial page load */}
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

          {/* Contact Section - Special padding as it's the last main section */}
          <section id="contact" className="min-h-screen scroll-mt-24 relative">
            <div className="py-20">
              <Suspense fallback={<LoadingSpinner sectionId="contact" />}>
                <Contact />
              </Suspense>
            </div>
          </section>

          {/* Footer - Appears at the bottom of all content */}
          <Suspense fallback={<div className="h-20"></div>}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </ActiveSectionProvider>
  );
};

export default Layout;
