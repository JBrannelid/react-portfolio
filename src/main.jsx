import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Render the app with all icons loaded
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
