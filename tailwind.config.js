/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        boxShadow: {
        'dark-xl': '0 10px 5px -3px rgba(0, 0, 0, 0.9), 0 4px 6px -2px rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [require("daisyui")],
};
