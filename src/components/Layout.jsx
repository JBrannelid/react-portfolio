import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarMain from "./navbar/NavbarMain";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import { ActiveSectionProvider } from "../context/ActiveSectionContext";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.slice(1) || "home";
    const element = document.getElementById(path);

    if (element) {
      const navbarHeight = 100; // offset by 100 to count for navbar hight
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      // smooth scrolling bahavior for all devices
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [location]);

  // CSS styling for horisontell line between every section (home, about, ect)
  const SectionDivider = () => (
    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[var(--accent-orange-color)] to-transparent" />
  );
  // Layout component manages the single-page-application (SPA) structure
  return (
    <ActiveSectionProvider>
      <div className="relative">
        <NavbarMain />
        <div className="pt-24">
          <section id="home" className="min-h-screen scroll-mt-24">
            <Home />
          </section>
          <div className="-mt-8">
            <SectionDivider />
          </div>
          <section id="about" className="min-h-screen scroll-mt-24">
            <About />
          </section>
          <div className="-mt-8">
            <SectionDivider />
          </div>
          <section id="portfolio" className="min-h-screen scroll-mt-24">
            <Portfolio />
          </section>
          <div className="-mt-8">
            <SectionDivider />
          </div>
          <section id="experience" className="min-h-screen scroll-mt-24">
            <Experience />
          </section>
          <div className="-mt-8">
            <SectionDivider />
          </div>
          <section id="contact" className="min-h-screen scroll-mt-24">
            <Contact />
          </section>
        </div>
      </div>
    </ActiveSectionProvider>
  );
};

export default Layout;
