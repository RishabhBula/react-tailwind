/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#f7b200",
      },
      borderRadius: {
        6: "6px",
        8: "8px",
        half: "50%",
        radius: "40px",
      },
    },
    screens: {
      sm: "540px",
      md: "768px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
