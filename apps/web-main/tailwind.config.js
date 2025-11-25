/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {pattern: /bg-(primary|sage)-.*/},
    {pattern: /text-(primary|sage)-.*/},
    {pattern: /border-(primary|sage)-.*/},
    {pattern: /from-(primary|sage)-.*/},
    {pattern: /to-(primary|sage)-.*/},
    {pattern: /via-(primary|sage)-.*/},
    'font-serif',
    'font-sans',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cream: "#FAF8F5",
          beige: "#F5F0E8",
          sand: "#E8E0D5",
          taupe: "#C4B7A6",
          dark: "#3d3d3d",
          charcoal: "#2b2b2b",
        },
        sage: {
          50: "#f6f7f4",
          100: "#e8ebe3",
          200: "#d4dac9",
          300: "#b5c0a5",
          400: "#96a67e",
          500: "#7a8b62",
          600: "#5f6e4c",
          700: "#4a5640",
          800: "#3d4736",
          900: "#353d30",
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
