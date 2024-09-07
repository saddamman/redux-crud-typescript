/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        customPurple: {
          100: "var(--color-customPurple-100)",
          200: "var(--color-customPurple-200)",
          300: "var(--color-customPurple-300)",
          400: "var(--color-customPurple-400)",
          500: "var(--color-customPurple-500)",
          600: "var(--color-customPurple-600)",
          700: "var(--color-customPurple-700)",
          800: "var(--color-customPurple-800)",
          900: "var(--color-customPurple-900)",
          950: "var(--color-customPurple-950)",
        },
      },
    },
  },
  plugins: [],
};
