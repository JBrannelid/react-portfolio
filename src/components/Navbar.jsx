import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useActiveSection } from "../context/NavigationContext";
// Icon imports
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";

const Navbar = () => {
  // State variables
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { activeSection } = useActiveSection();

  // Navigation links configuration
  const links = [
    { sectionPath: "/", sectionName: "Home" },
    { sectionPath: "/about", sectionName: "About Me" },
    { sectionPath: "/skills", sectionName: "Skills" },
    { sectionPath: "/portfolio", sectionName: "Portfolio" },
    { sectionPath: "/experience", sectionName: "Experience" },
    { sectionPath: "/contact", sectionName: "Contact" },
  ];

  // Toggle mobile menu open/closed
  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY; // Detect scroll in vertical (Y)
      setIsHidden(currentScrollY > 20 && currentScrollY > lastScrollY); // Hide navbar when scrolling down and beyond 20px
      setLastScrollY(currentScrollY);
    };

    // Add scroll listener when the component is loading
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Re-run effect when lastScrollY changes

  // Determines which navigation link should be highlighted as active
  const isActive = (sectionPath) => {
    const sectionName = sectionPath === "/" ? "home" : sectionPath.slice(1);
    return activeSection === sectionName;
  };

  return (
    <nav
      // hide navbar when scrolling down
      className={`fixed left-1/2 z-20 mt-7 sm:mt-2 flex w-full max-w-11/12 -translate-x-1/2 gap-4 px-4
      transition-transform duration-300 ease-in-out ${isHidden ? "-translate-y-24" : "translate-y-0"}`}
    >
      {/* Desktop navigation */}
      <div className="relative w-full hidden md:block">
        {/* Background and content container */}
        <div className="relative rounded-full">
          <div className="absolute inset-[1px] rounded-full bg-nav-bg border-accent-orange border-1" />
          {/* Navigation content */}
          <div className="relative z-10 flex w-full items-center justify-between p-6">
            {/* Logo */}
            <div>
              <h1 className="hidden lg:block text-2xl">Johannes Brannelid</h1>
              <h1 className="block lg:hidden text-4xl font-bold">JB</h1>
            </div>

            {/* Navigation links - desktop */}
            <div className="hidden md:block">
              <ul className="flex flex-row gap-4 lg:gap-6 text-center">
                {links.map(({ sectionPath, sectionName }) => (
                  <li key={sectionPath} className="group relative">
                    <NavLink
                      to={sectionPath}
                      className={
                        isActive(sectionPath) ? "text-accent1-orange" : ""
                      }
                    >
                      <span className="relative inline-block text-md lg:text-base">
                        {sectionName}
                        {/* Underline styling */}
                        <div className="absolute left-0 bottom-0 bg-accent-orange w-0 group-hover:w-full h-[1px] transition-all duration-500 ease-in-out" />
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="relative z-10 flex w-full items-center justify-between p-6 md:hidden">
        {/* Mobile logo */}
        <div>
          <h1 className="text-4xl font-bold">JB</h1>
        </div>

        {/* Mobile Link menu */}
        {menuOpen && (
          <ul
            className="flex flex-col gap-6 text-center 
                   fixed w-[80vw] left-1/2 -translate-x-1/2 top-32
                   bg-nav-bg rounded-2xl 
                   py-8 border border-accent-orange
                   overflow-y-auto"
          >
            {links.map(({ sectionPath, sectionName }) => (
              <li key={sectionPath} className="group relative">
                <NavLink
                  to={sectionPath}
                  onClick={toggleMenu}
                  className={isActive(sectionPath) ? "text-accent1-orange" : ""}
                >
                  <span className="relative inline-block text-xl">
                    {sectionName}
                    <div className="absolute left-0 bottom-0 bg-accent-orange w-0 group-hover:w-full h-[1px] transition-all duration-500 ease-in-out" />
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile menu button */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
        >
          <span className="absolute inset-[-1000%] bg-accent-orange" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-btn-bg px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
            {menuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
