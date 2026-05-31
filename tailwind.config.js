/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'portfolio-bg': '#fcfcfc', // warm white
        'portfolio-text': '#1a1a1a', // dark anthracite
        'portfolio-accent': '#7c9082', // soft sage green
        'portfolio-secondary': '#d2b48c', // tan/beige
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
