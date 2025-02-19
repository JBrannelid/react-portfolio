import { useEffect, lazy, Suspense, memo } from "react";
import { useLocation } from "react-router-dom";
import NavbarMain from "./navbar/NavbarMain";
import Home from "./sections/Home";
import { ActiveSectionProvider } from "../context/ActiveSectionContext";

// Define preload function to start loading chunks earlier
const preloadComponent = (factory) => {
  const Component = lazy(factory);
  Component.preload = factory;
  return Component;
};

// Lazy load non-critical sections with preload capability
const About = preloadComponent(() => import("./sections/About"));
const Experience = preloadComponent(() => import("./sections/Experience"));
const Portfolio = preloadComponent(() => import("./sections/Portfolio"));
const Contact = preloadComponent(() => import("./sections/Contact"));
const Skills = preloadComponent(() => import("./sections/Skills"));
const Footer = preloadComponent(() => import("./sections/Footer"));

// Memoized spinner to prevent rerenders
const LoadingSpinner = memo(({ sectionId }) => (
  <div id={sectionId} className="flex items-center justify-center min-h-[50vh]">
    <div className="w-12 h-12 border-4 border-[var(--accent-orange-color)] border-t-transparent rounded-full animate-spin"></div>
  </div>
));

// Memoized section divider to prevent rerenders
const SectionDivider = memo(() => (
  <div className="my-20">
    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--accent-orange-color)] to-transparent" />
  </div>
));

// Standardized section wrapper with consistent spacing
const Section = memo(({ id, children, isHome }) => (
  <section
    id={id}
    className={`scroll-mt-24 relative ${isHome ? "min-h-screen" : "min-h-screen"}`}
    data-section-id={id}
  >
    <div className={`${isHome ? "" : "py-20"}`}>{children}</div>
    {!isHome && <SectionDivider />}
  </section>
));

const Layout = () => {
  const location = useLocation();

  // Preload components on idle time
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const handle = requestIdleCallback(() => {
        // Start preloading other sections during idle time
        About.preload();
        Skills.preload();
        Portfolio.preload();
        Experience.preload();
        Contact.preload();
        Footer.preload();
      });
      return () => cancelIdleCallback(handle);
    }
  }, []);

  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    const element = document.getElementById(path);

    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      // Use passive scroll for better performance
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [location]);

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
