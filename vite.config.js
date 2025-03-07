import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import tailwindcss from "@tailwindcss/vite";

// Build project by code-split the application
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      filter: /\.(js|css|html|svg)$/i,
      threshold: 1024, // Only compress files larger than 1KB
      deleteOriginFile: false, // Keep original files alongside compressed ones
    }),
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      filter: /\.(js|css|html|svg)$/i,
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ],
  server: {
    open: true,
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React dependencies
          "react-core": ["react", "react-dom"],
          // Routing
          routing: ["react-router-dom"],
          // Icons
          "lucide-icons": ["lucide-react"],
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
    cssCodeSplit: true,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 800,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
