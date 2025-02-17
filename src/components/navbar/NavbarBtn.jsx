import { Menu, X } from "lucide-react";

const NavbarBtn = ({ toggleMenu, menuOpen }) => {
  return (
    <button
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      onClick={toggleMenu}
      className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-50 sm:hidden"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ec8b2a_0%,#ffd621_50%,#ec8b2a_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[var(--Btn-bg)] px-3 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-4 w-4" />}
      </span>
    </button>
  );
};

export default NavbarBtn;

/* Reference
 * Button
 * https://ui.ibelick.com/button-rotating-background-gradient
 */
