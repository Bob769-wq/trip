/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cover-bg': '#00000099',
        'side-button': '#f5f7fa',
        night: '#f0f2f5',
        'header-list': '#051A37',
        'light-gray': '#F6F7FA',
        side: '#0F294D',
        'primary-blue': '#3264FF',
        'menu-hover': '#3264ff14',
        'primary-blue-hover': '#2953D6',
        rating: '#1136A6',
        'rating-total': '#ffffff80',
        discount: '#F94C86',
        'input-container-hover': '#EFF3FF',
        divider: '#dddada',
        location: '#4f5563',
        'tag-background': '#f94c8614',
        'tag-text': '#ec3c77',
        'side-footer': '#8592a6',
      },
      spacing: {
        xxs: '1px',
        mini: '2px',
      },
      screens: {
        xxl: '1920px',
        'search-col': '900px',
        's-m': '590px',
      },
      width: {
        map: '136px',
        's-logo': '74px',
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
        'search-col': '900px',
      },
      minWidth: {
        'input-container': '200px',
        divider: '1px',
      },
      height: {
        's-logo': '18px',
        logo: '30px',
        'list-right': '34px',
      },
    },
  },
  plugins: [],
};
