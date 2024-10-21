/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "dark-xl":
          "0 10px 5px -3px rgba(0, 0, 0, 0.9), 0 4px 6px -2px rgba(0, 0, 0, 0.75)",
      },
      fontFamily: {
        "sf-pro": ['"SF Pro Display"', "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" }, // Start offscreen on the right
          "100%": { transform: "translateX(-80%)" }, // End offscreen on the left
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite", // Adjusted timing for a quicker scroll
      },
    },
  },
  plugins: [],
};
