/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // Use o caminho relativo a partir da pasta SRC
        'hero-pattern': "url('./assets/background-image.jpg')",
      },
      fontFamily: {
        'fredoka': ['"Work Sans"', 'sans-serif']
      }
    }
  },
  plugins: [],
}