/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'm-1026': '1026px',
        'md-high': '1014px',
        'fold': '280px'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
    variants: {},
    // ...
    plugins: [],
    // ...
    theme: {},
  }
}
