import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";

// Import all required icons synchronously to avoid loading issues
import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronRight,
  faCircle,
  faDesktop,
  faServer,
  faCodeBranch,
  faBriefcase,
  faGraduationCap,
  faAward,
  faCertificate,
  faFilePdf,
  faSun,
  faMoon,
  faLink,
  faSpinner,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// Then after your imports but before rendering:
document.addEventListener("DOMContentLoaded", () => {
  // This should now always be true because of our override
  const hoverSupported = window.matchMedia("(hover: hover)").matches;
  console.log("Hover capability (forced):", hoverSupported);

  document.documentElement.classList.add("hover-capable");

  // Add this class to force all hover styles
  document.body.classList.add("force-hover");
});

// Add all icons immediately
library.add(
  // Solid icons
  faBars,
  faTimes,
  faChevronDown,
  faChevronRight,
  faCircle,
  faDesktop,
  faServer,
  faCodeBranch,
  faBriefcase,
  faGraduationCap,
  faAward,
  faCertificate,
  faFilePdf,
  faSun,
  faMoon,
  faLink,
  faSpinner,
  faEnvelope,

  // Brand icons
  faGithub,
  faLinkedin,
  faInstagram
);

// Render the app with all icons loaded
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
