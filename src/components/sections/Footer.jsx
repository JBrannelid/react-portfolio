import { useTheme } from "../../context/ThemeContext";
// Icon imports
import Instagram from "lucide-react/dist/esm/icons/instagram";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import Github from "lucide-react/dist/esm/icons/github";
import Sun from "lucide-react/dist/esm/icons/sun";
import Moon from "lucide-react/dist/esm/icons/moon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-nav-bg min-h-1/5 border-t border-white/80">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[30%_1fr_30%] gap-4 p-8">
        {/* Social Media Section */}
        <section className="md:border-r border-white/80 py-4  flex flex-col items-center">
          <h3 className="text-lg font-semibold m-2">Social Media</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/jbrannelid/"
              aria-label="Instagram Profile"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-accent-orange transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/johannes-brannelid"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-accent-orange transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/JBrannelid"
              aria-label="GitHub Profile"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-accent-orange transition-colors duration-300"
            >
              <Github size={24} />
            </a>
          </div>
        </section>

        {/* Middle Section */}
        <section className="md:border-r border-white/60 flex flex-col items-center py-4">
          <h3 className="text-lg font-semibold m-2 ">Stockholm | Sweden</h3>
          <p className="text-sm opacity-90 pt-2">
            &copy; {currentYear} Johannes Brannelid. All rights reserved
          </p>
        </section>

        {/* Theme Toggle Section */}
        <section className="flex justify-center items-center py-4">
          <button
            className=" hover:text-accent-orange transition-colors duration-300"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
