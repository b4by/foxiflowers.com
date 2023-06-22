/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "7xl": "1320px",
      },
      backgroundColor: {
        benefitsItem: "rgba(255, 255, 255, 0.6)",
        value1: "#F9DFE6",
        value2: "#EDDFFF",
        value3: "#FFEDD2",
        value4: "#FFE5DB",
      },
      backgroundImage: {
        hero: "url('@/assets/img/hero-bg@1x.png')",
        review: "linear-gradient(-75deg, #FBE0DC 55.5%, transparent 50% 100%);",
      },
      boxShadow: {
        primary: "0px 0px 17px rgba(0, 0, 0, 0.15)",
        secondary: "0px 0px 17px rgba(0, 0, 0, 0.05)",
        value: "0px 0px 4px rgba(0, 0, 0, 0.1)",
      },
      opacity: {
        15: "0.15",
        35: "0.35",
        65: "0.65",
      },
      backgroundOpacity: {
        10: "0.1",
        15: "0.15",
        95: "0.95",
      },
    },
  },
  plugins: [],
};
