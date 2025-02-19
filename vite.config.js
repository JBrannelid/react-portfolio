import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Build project by code-split the application
export default defineConfig({
  plugins: [react()],
  base: "/react-portfolio/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React dependencies
          "react-core": ["react", "react-dom"],

          // Routing
          routing: ["react-router-dom", "react-scroll"],

          // Split FontAwesome (large dependency) into its own chunk
          "fontawesome-solid": ["@fortawesome/free-solid-svg-icons"],
          "fontawesome-brands": ["@fortawesome/free-brands-svg-icons"],
        },
        assetFileNames: (assetInfo) => {
          if (
            assetInfo.name &&
            /\.(woff2?|ttf|otf|eot)$/.test(assetInfo.name)
          ) {
            return "assets/fonts/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
    // Warning limit
    chunkSizeWarningLimit: 800,
  },
  // Optimize development experience
  server: {
    open: true,
    port: 3000,
  },
});
