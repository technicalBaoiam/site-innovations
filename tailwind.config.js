/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "max-xs": { max: "640px" },
        // "max-md": { max: "768px" },
      },
    },
  },
  plugins: [],
};
