import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarMain from "./navbar/NavbarMain";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import { ActiveSectionProvider } from "../context/ActiveSectionContext";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

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

  // CSS styling for horisontell line between every section (home, about, ect)
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
          {/* Home Section */}
          <Section id="home" isHome>
            <Home />
          </Section>

          {/* About Section */}
          <Section id="about">
            <About />
          </Section>

          {/* Skills Section */}
          <Section id="skills">
            <Skills />
          </Section>

          {/* Portfolio Section */}
          <Section id="portfolio">
            <Portfolio />
          </Section>

          {/* Experience Section */}
          <Section id="experience">
            <Experience />
          </Section>

          {/* Contact Section with fix padding as it is last section*/}
          <section id="contact" className="min-h-screen scroll-mt-24 relative">
            <div className="py-20">
              <Contact />
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </ActiveSectionProvider>
  );
};

export default Layout;
