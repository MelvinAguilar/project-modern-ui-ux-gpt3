/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-blue": "#040C18",
        orange: "#FF4820",
        "light-orange": "rgba(255, 111, 82)",
        "light-blue": "#81AFDD",
        "prussian-blue": "rgba(5, 45, 86, 1)",
        "prussian-blue-aux": "rgba(4, 44, 84, 1)",
        "electric-blue": "rgba(113, 229, 255, 1)",
        "maastricht-blue": "rgba(3, 27, 52, 1)",
      },
    },
  },
  plugins: [],
};
