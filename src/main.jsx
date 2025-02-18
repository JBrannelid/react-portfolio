import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";

// Brands icons
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Solid icons
import {
  faDesktop,
  faServer,
  faCodeBranch,
  faBriefcase,
  faGraduationCap,
  faAward,
  faCertificate,
  faChevronDown,
  faChevronRight,
  faCircle,
  faFilePdf,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

// Add favicon to the library
library.add(
  // Brands
  faGithub,
  faLinkedin,
  faInstagram,

  // Solid
  faDesktop,
  faServer,
  faCodeBranch,
  faBriefcase,
  faGraduationCap,
  faAward,
  faCertificate,
  faChevronDown,
  faChevronRight,
  faCircle,
  faFilePdf,
  faSun,
  faMoon
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
