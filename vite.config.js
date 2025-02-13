import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-portfolio/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // file extensions and formats
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
    // Disable sourcemap in production
    sourcemap: false,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
    extensions: [".js", ".jsx", ".json"],
  },
  server: {
    port: 3000,
    open: true,
    host: true,
  },
});
