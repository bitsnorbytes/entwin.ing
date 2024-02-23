/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{cshtml,js,razor,html}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

