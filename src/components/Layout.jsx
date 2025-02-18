import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import NavbarMain from "./navbar/NavbarMain";
import Home from "./sections/Home";
// Lazy load non-critical sections for a better site performance
const About = lazy(() => import("./sections/About"));
const Experience = lazy(() => import("./sections/Experience"));
const Portfolio = lazy(() => import("./sections/Portfolio"));
const Contact = lazy(() => import("./sections/Contact"));
const Skills = lazy(() => import("./sections/Skills"));
const Footer = lazy(() => import("./sections/Footer"));

import { ActiveSectionProvider } from "../context/ActiveSectionContext";

// Loading spinner component with section ID for proper tracking
const LoadingSpinner = ({ sectionId }) => (
  <div id={sectionId} className="flex items-center justify-center min-h-[50vh]">
    <div className="w-12 h-12 border-4 border-[var(--accent-orange-color)] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    const element = document.getElementById(path);

    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [location]);

  // CSS styling för horisontell line between every section (home, about...)
  const SectionDivider = () => (
    <div className="my-20">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--accent-orange-color)] to-transparent" />
    </div>
  );

  // Standardized section wrapper with consistent spacing
  const Section = ({ id, children, isHome }) => (
    <section
      id={id}
      className={`scroll-mt-24 relative ${
        isHome ? "min-h-screen" : "min-h-screen"
      }`}
      data-section-id={id}
    >
      <div className={`${isHome ? "" : "py-20"}`}>{children}</div>
      {!isHome && <SectionDivider />}
    </section>
  );

  // Layout component manages the single-page-application (SPA) structure
  return (
    <ActiveSectionProvider>
      <div className="relative">
        <NavbarMain />
        <div className="pt-24">
          {/* Home Section - Not lazy loaded as it's the first visible section */}
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

          {/* Contact Section with fix padding as it is last section*/}
          <section id="contact" className="min-h-screen scroll-mt-24 relative">
            <div className="py-20">
              <Suspense fallback={<LoadingSpinner sectionId="contact" />}>
                <Contact />
              </Suspense>
            </div>
          </section>

          <Suspense fallback={<div className="h-20"></div>}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </ActiveSectionProvider>
  );
};

export default Layout;
