/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#465AE9",
        background: "#1A1A1A",
        input: "#24252C",
        label: "#FFFFFFB2",
      },
    },
  },
  plugins: [],
};
