/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Adding the custom font under a key like 'plex'
        'plex': ['"IBM Plex Sans Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

