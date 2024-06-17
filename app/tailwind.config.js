/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{cshtml,js,razor,html}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['InterVariable', 'sans-serif'],
      'serif': ['Zilla Slab', 'serif']

    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}