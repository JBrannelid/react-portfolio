import { NavLink } from "react-router-dom";
import { useActiveSection } from "../../context/ActiveSectionContext";

const NavbarLinks = ({ setMenuOpen }) => {
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

  // Check if current section is active for highlight CSS styling
  const isActive = (path) => {
    const sectionName = path === "/" ? "home" : path.slice(1);
    return activeSection === sectionName;
  };

  return (
    <nav className="relative z-50 ">
      <ul
        className="flex flex-col sm:flex-row gap-6 text-center 
                     absolute sm:relative 
                     w-[calc(100vw-4rem)] sm:w-auto 
                     left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 
                     top-15 sm:top-auto
                     bg-[var(--nav-bg)]/80 sm:bg-transparent 
                     backdrop-blur-md sm:backdrop-blur-none 
                     rounded-2xl sm:rounded-none 
                     py-6 sm:py-0 
                     border border-[var(--accent-orange-color)] sm:border-0
                     shadow-lg sm:shadow-none
                     "
      >
        {/* map trough the array of links holding path and name and set styling if true */}
        {links.map(({ path, name }) => (
          <li key={path} className="group relative">
            <NavLink
              to={path}
              onClick={() => setMenuOpen(false)}
              className={
                isActive(path) ? "text-[var(--accent1-orange-color)]" : ""
              }
            >
              <span className="relative text-xl lg:text-base">
                {name}
                <div className="absolute left-0 bottom-0 bg-[var(--accent-orange-color)] w-0 group-hover:w-full h-[1px] transition-all duration-500" />
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarLinks;
