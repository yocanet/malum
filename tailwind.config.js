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
      /* Sparkle Medya corporate palette:
         brand = kurumsal turuncu (#F15F2C @ 500) — primary accent
         steel = kurumsal gri    (#6C7E8F @ 500) — secondary support
         Warm amber detail accents come from Tailwind defaults; no indigo,
         violet or cyan anywhere. ink/body are named text-colour aliases. */
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
