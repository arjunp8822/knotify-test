/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        marley: ["marley", "sans"],
      },
      colors: {
        primary: "#CD1818",
      },
    },
  },
  plugins: [],
};
