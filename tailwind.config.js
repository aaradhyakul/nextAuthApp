/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      flex: {
        left: "1 1 588px",
        right: "1 1 852px",
        top: "0 1 100px",
        bottom: "1 1 auto",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
      fontSize: {
        mid: "14px",
      },
      colors: {
        formblue: "#346BD4",
      },
      screens: {
        mid: "1276px",
        mh: "900px",
        ce: "850px",
        mb: "540px",
      },
    },
  },
  plugins: [],
};
