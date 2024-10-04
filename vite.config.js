import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
    viteCompression({
      threshold: 10240, // Compress files larger than 10KB
      algorithm: "gzip", // or 'brotliCompress' for Brotli
    }),
  ],
});
