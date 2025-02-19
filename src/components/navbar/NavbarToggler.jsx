import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Navbar toggle button component with Tailwind CSS styling
const NavbarToggler = ({ toggleMenu }) => {
  return (
    <button
      className="text-2xl p-3 border-[var(--accent-orange-color)] rounded-full"
      onClick={toggleMenu}
    >
      <FontAwesomeIcon icon={["fas", "bars"]} />
    </button>
  );
};

export default NavbarToggler;
