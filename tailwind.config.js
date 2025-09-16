/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#f0f2f5',
        'header-list': '#051A37',
        'light-gray': '#F6F7FA',
        side: '#0F294D',
        'primary-blue': '#3264FF',
        'primary-blue-hover': '#2953D6',
        rating: '#1136A6',
        'rating-total': '#ffffff80',
        discount: '#F94C86',
        'input-container-hover': '#EFF3FF',
        divider: '#dddada',
        location: '#4f5563',
        'tag-background': '#f94c8614',
        'tag-text': '#ec3c77',
      },
      spacing: {
        xxs: '1px',
        mini: '2px',
      },
      screens: {},
      width: {
        logo: '124px',
        '3/10': '30%',
        sidenav: '278px',
        'card-img': '236px',
      },
      maxWidth: {
        'up-header': '1920px',
        'input-max': '100%-24px',
        '6.5xl': '1160px',
        '1/3': '33%',
      },
      minWidth: {
        'input-container': '200px',
        divider: '1px',
      },
      height: {
        logo: '30px',
        'list-right': '34px',
      },
    },
  },
  plugins: [],
};
