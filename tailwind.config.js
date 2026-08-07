/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "sans-serif"],
      },
      /* Corporate palette:
         brand = firma turuncusu (#F15F2C @ 500)
         steel = firma grisi   (#6C7E8F @ 500)
         ink/body are named aliases for the theme text colours. */
      colors: {
        ink: "#0F172A",
        body: "#6C7E8F",
        brand: {
          50: "#FEF3EE",
          100: "#FDE4D8",
          200: "#FAC8B0",
          300: "#F7A382",
          400: "#F47F53",
          500: "#F15F2C",
          600: "#D9481B",
          700: "#B23A15",
          800: "#8C2E12",
          900: "#72260F",
        },
        steel: {
          50: "#F3F6F8",
          100: "#E7ECF0",
          200: "#CFDAE1",
          300: "#AEBFCA",
          400: "#8DA0AF",
          500: "#6C7E8F",
          600: "#586878",
          700: "#475462",
          800: "#39434E",
          900: "#2E363F",
        },
      },
    },
  },
  plugins: [],
};
