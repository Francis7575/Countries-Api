/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'extra-sm': '528px',
        'mdup': '820px'
      },
      colors: {
        'dark-gray': '#2B3844',
        'light-hover': 'hsl(0, 0%, 90%)',
        'dark-hover': 'hsl(209, 23%, 18%)'
      },
      boxShadow: {
        'themeBar': '0px 2px 4px 0px rgba(0, 0, 0, 0.06)',
        'searchBar': '0px 2px 9px 0px rgba(0, 0, 0, 0.05)',
        'countryCard': '0px 0px 7px 2px rgba(0, 0, 0, 0.03)',
        'backBtn': '0px 0px 7px 0px rgba(0, 0, 0, 0.29)',
        'borderCard': '0px 0px 4px 1px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}