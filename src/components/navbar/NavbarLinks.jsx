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
    <nav className="relative z-50">
      <ul
        className="flex flex-col sm:flex-row gap-6 text-center 
                   fixed sm:relative 
                   w-[80vw] sm:w-auto 
                   left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 
                   top-20 sm:top-auto
                   bg-[var(--nav-bg)]/95 sm:bg-transparent 
                   backdrop-blur-lg sm:backdrop-blur-none 
                   rounded-2xl sm:rounded-none 
                   py-8 sm:py-0 
                   border border-[var(--accent-orange-color)] sm:border-0
                   shadow-xl sm:shadow-none
                   max-h-[80vh] overflow-y-auto sm:overflow-visible"
      >
        {/* map trough the array of links holding path and name and set styling if true */}
        {links.map(({ path, name }) => (
          <li key={path} className="group relative">
            <NavLink
              to={path}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 sm:py-0 px-4 sm:px-0 transition-colors duration-300 ${
                isActive(path)
                  ? "text-[var(--accent1-orange-color)]"
                  : "hover:bg-white/10 sm:hover:bg-transparent"
              }`}
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
