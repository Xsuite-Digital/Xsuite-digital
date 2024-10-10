// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { visualizer } from "rollup-plugin-visualizer";
// import viteCompression from "vite-plugin-compression";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     visualizer({ open: true }),
//     viteCompression({
//       threshold: 10240, // Compress files larger than 10KB
//       algorithm: "gzip", // or 'brotliCompress' for Brotli
//     }),
//   ],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
    viteCompression({
      threshold: 10240, // Compress files larger than 10KB
      algorithm: "brotliCompress", // Use Brotli for compression
    }),
    // Optionally, you could add a CDN plugin here for loading external libraries
  ],
  build: {
    sourcemap: true, // Enable source maps for easier debugging in production
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]", // Include hashing for assets like images
      },
    },
  },
});
