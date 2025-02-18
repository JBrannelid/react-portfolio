import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-[var(--nav-bg)] min-h-[20vh] border-t border-white/60">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[25%_1fr_30%] gap-4 p-8">
        {/* Social Media Section */}
        <section className="md:border-r border-white/60 py-4">
          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/jbrannelid/"
              aria-label="Instagram Profile"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[var(--accent-orange-color)] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
            <a
              href="https://www.linkedin.com/in/johannes-brannelid"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[var(--accent-orange-color)] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a
              href="https://github.com/JBrannelid"
              aria-label="GitHub Profile"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[var(--accent-orange-color)] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>
        </section>

        {/* Middle Section */}
        <section className="md:border-r border-white/60 flex flex-col justify-end items-center py-4">
          <p className="pb-5">
            <span className="mx-2 truncate w-72">Stockholm | Sweden</span>
          </p>
          <p className="text-sm opacity-90">
            &copy; {currentYear} Johannes Brannelid. All rights reserved
          </p>
        </section>

        {/* Theme Toggle Section */}
        <section className="flex justify-center items-center py-4">
          <button
            className="text-2xl hover:text-[var(--accent-orange-color)] transition-colors duration-300"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
          >
            <FontAwesomeIcon
              icon={theme === "dark" ? ["fas", "moon"] : ["fas", "sun"]}
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </button>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
