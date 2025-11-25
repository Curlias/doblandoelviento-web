/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Doblando el Viento
        primary: {
          cream: "#f5ebe0",
          beige: "#e3d5ca",
          dark: "#3d3d3d",
          charcoal: "#2b2b2b",
          accent: "#d5bdaf",
        },
        // TAVITI
        taviti: {
          50: '#fef2f4',
          100: '#fde6e9',
          200: '#fbd0d9',
          300: '#f7a8b8',
          400: '#f27693',
          500: '#e74c73',
          600: '#d1295d',
          700: '#b01e4d',
          800: '#931d47',
          900: '#7d1c42',
        },
        // ILAIA
        ilaia: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
