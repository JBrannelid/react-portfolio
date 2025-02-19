import { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle mobile menu
  const toggleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);

    // Prevent body scrolling when menu is open
    if (newMenuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  // Clean up body overflow style when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollDirection("down");
      } else {
        // Scrolling up
        setScrollDirection("up");
      }

      // Update scroll state
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Navbar classes based on scroll state
  const navbarClasses = `fixed left-1/2 z-20 mt-2 flex w-full max-w-[1300px] -translate-x-1/2 gap-4 px-4
    transition-transform duration-300 ease-in-out
    ${scrollDirection === "down" && isScrolled ? "-translate-y-24" : "translate-y-0"}`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="relative w-full hidden sm:block">
          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-full p-[1px] overflow-hidden">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec8b2a_0%,#ffd621_50%,#ec8b2a_100%)]" />
          </div>

          {/* Bg and content container */}
          <div className="relative rounded-full">
            <div className="absolute inset-[1px] rounded-full bg-[var(--nav-bg)]" />

            {/* Navigation content */}
            <div className="relative z-10 flex w-full items-center justify-between p-6">
              <NavbarLogo />
              {/* Conditional rendering of desktop menu */}
              <div
                className={`${menuOpen ? "block" : "hidden"} sm:block w-full sm:w-auto`}
              >
                <NavbarLinks setMenuOpen={setMenuOpen} />
              </div>
              {/* Mobile menu toggle button - hidden on desktop */}
              <NavbarBtn toggleMenu={toggleMenu} menuOpen={menuOpen} />
            </div>
          </div>
        </div>
        {/* Mobile navigation content */}
        <div className="relative z-10 flex w-full items-center justify-between p-6 sm:hidden">
          <NavbarLogo hideTextOnMobile={true} />
          {/* Conditional rendering of mobile menu */}
          <div className={`${menuOpen ? "block" : "hidden"} w-full`}>
            <NavbarLinks setMenuOpen={setMenuOpen} />
          </div>
          {/* Mobile menu toggle button */}
          <NavbarBtn toggleMenu={toggleMenu} menuOpen={menuOpen} />
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
