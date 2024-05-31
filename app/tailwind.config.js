/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{cshtml,js,razor,html}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Righteous', 'sans-serif']
     
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}