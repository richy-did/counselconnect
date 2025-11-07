/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecf4ff",
          100: "#d9e9ff",
          200: "#b3d3ff",
          300: "#8dbdff",
          400: "#66a7ff",
          500: "#4091ff",
          600: "#2576e6",
          700: "#1c5bb4",
          800: "#134182",
          900: "#0a2850"
        }
      }
    },
  },
  plugins: [],
}