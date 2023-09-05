/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'back-btn': `url('https://test.create.diagnal.com/images/nav_bar.png')`,
      },
    },
  },
  plugins: [],
};
