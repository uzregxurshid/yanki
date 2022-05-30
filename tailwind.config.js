// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'Arial', 'Helvetica', 'sans-serif']
      },
      screens: {
        clg: '1160px'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tw-elements/dist/plugin')]
};
