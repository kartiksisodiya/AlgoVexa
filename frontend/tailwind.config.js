/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        purple: "var(--color-purple)",
        coral: "var(--color-coral)",
        light: "var(--color-light)",
        grayText: "var(--color-grayText)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        source: ['"Source Serif 4"', 'serif'],
        garamond: ['"EB Garamond"', 'serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
      keyframes: {
        bounceOnce: {
          "0%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-12%)" },
          "60%": { transform: "translateY(0)" },
          "80%": { transform: "translateY(-6%)" },
        },
      },
      animation: {
        bounceOnce: "bounceOnce 0.6s ease",
      },
    },
  },
  plugins: [],
};
