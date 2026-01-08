/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Mono"', "monospace"],
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "spin-reverse": "spin-reverse 24s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        cubeSpin: {
          "0%": { transform: "rotateX(18deg) rotateY(0deg)" },
          "100%": { transform: "rotateX(18deg) rotateY(360deg)" },
        },
      },
       animation: {
        cubeSpin: "cubeSpin 14s linear infinite",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1200px",
          "2xl": "1280px",
        },
      },
            letterSpacing: {
        '05px': '0.5px',
      },

    },
  },
  plugins: [],
};
