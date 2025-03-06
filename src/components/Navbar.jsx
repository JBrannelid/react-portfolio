import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useActiveSection } from "../context/AppContext";

const Navbar = () => {
  // State variables
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const { activeSection } = useActiveSection();

  // Navigation links configuration
  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Me" },
    { path: "/skills", name: "Skills" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/experience", name: "Experience" },
    { path: "/contact", name: "Contact" },
  ];

  // Toggle mobile menu open/closed
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Detects when users scroll down to hide the navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Determines which navigation link should be highlighted as active
  const isActive = (path) => {
    const sectionName = path === "/" ? "home" : path.slice(1);
    return activeSection === sectionName;
  };

  // CSS classes
  const navbarClasses = `fixed left-1/2 z-20 mt-7 sm:mt-2 flex w-full max-w-[1300px] -translate-x-1/2 gap-4 px-4
    transition-transform duration-300 ease-in-out
    ${scrollDirection === "down" && isScrolled ? "-translate-y-24" : "translate-y-0"}`;

  const menuButtonClasses =
    "relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2";

  // Animated border and button styling
  const animatedBorder =
    "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec8b2a_0%,#ffd621_50%,#ec8b2a_100%)]";
  const buttonContent =
    "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[var(--Btn-bg)] px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl";

  // Link hover underline animation
  const linkUnderline =
    "absolute left-0 bottom-0 bg-[var(--accent-orange-color)] w-0 group-hover:w-full h-[1px] transition-all duration-500 ease-in-out";

  return (
    <nav className={navbarClasses}>
      {/* Desktop navigation */}
      <div className="relative w-full hidden sm:block">
        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-full p-[1px] overflow-hidden">
          <span className={animatedBorder} />
        </div>

        {/* Background and content container */}
        <div className="relative rounded-full">
          <div className="absolute inset-[1px] rounded-full bg-[var(--nav-bg)]" />

          {/* Navigation content */}
          <div className="relative z-10 flex w-full items-center justify-between p-6">
            {/* Logo */}
            <div>
              <h1 className="hidden lg:block text-2xl">Johannes Brannelid</h1>
              <h1 className="block lg:hidden text-4xl font-bold">JB</h1>
            </div>

            {/* Navigation links - desktop */}
            <div className="hidden sm:block">
              <ul className="flex flex-row gap-6 text-center">
                {links.map(({ path, name }) => (
                  <li key={path} className="group relative">
                    <NavLink
                      to={path}
                      className={`block py-0 px-0 transition-colors duration-300 ${
                        isActive(path)
                          ? "text-[var(--accent1-orange-color)]"
                          : "hover:bg-transparent"
                      }`}
                    >
                      <span className="relative inline-block text-base">
                        {name}
                        <div className={linkUnderline} />
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
      <div className="relative z-10 flex w-full items-center justify-between p-6 sm:hidden">
        {/* Mobile logo */}
        <div>
          <h1 className="text-4xl font-bold">JB</h1>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul
            className="flex flex-col gap-6 text-center 
                     fixed w-[80vw] left-1/2 -translate-x-1/2 top-32
                     bg-[var(--nav-bg)]/95 backdrop-blur-lg rounded-2xl 
                     py-8 border border-[var(--accent-orange-color)]
                     shadow-xl max-h-[80vh] overflow-y-auto"
          >
            {links.map(({ path, name }) => (
              <li key={path} className="group relative">
                <NavLink
                  to={path}
                  onClick={toggleMenu}
                  className={`block py-3 px-4 transition-colors duration-300 ${
                    isActive(path)
                      ? "text-[var(--accent1-orange-color)]"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="relative inline-block text-xl">
                    {name}
                    <div className={linkUnderline} />
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
          className={menuButtonClasses}
        >
          <span className={animatedBorder} />
          <span className={buttonContent}>
            {menuOpen ? (
              <X className="h-5 w-5" />
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
