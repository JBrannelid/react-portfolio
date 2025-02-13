import { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";

// State for mobile menu toggle
const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // Fixed navbar container
    <nav className="fixed left-1/2 z-20 mt-2 flex w-full max-w-[1300px] -translate-x-1/2 gap-4 px-4">
      <div className="relative w-full">
        {/* Animated border effect from ibelick*/}
        <div className="absolute inset-0 rounded-full p-[1px] overflow-hidden">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec8b2a_0%,#ffd621_50%,#ec8b2a_100%)]" />
        </div>

        {/* Bg and content container */}
        <div className="relative rounded-full">
          <div className="absolute inset-[1px] rounded-full bg-[var(--nav-bg)]" />

          {/* Navigation content */}
          <div className="relative z-10 flex w-full items-center justify-between p-6">
            <NavbarLogo />
            {/* Condition rendering mobil menu*/}
            <div
              className={`${menuOpen ? "block" : "hidden"} sm:block w-full sm:w-auto`}
            >
              <NavbarLinks setMenuOpen={setMenuOpen} />
            </div>
            {/* Mobile menu toggle button */}
            <NavbarBtn toggleMenu={toggleMenu} menuOpen={menuOpen} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
