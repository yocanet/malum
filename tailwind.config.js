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
      /* Premium light-mode palette:
         brand = electric indigo (#6366F1 @ 500) — primary accent
         steel = cool support grey (#6C7E8F @ 500) — neutrals
         Limited violet/cyan/amber detail accents come from Tailwind defaults.
         ink/body are named aliases for the theme text colours. */
      colors: {
        ink: "#0F172A",
        body: "#64748B",
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
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
