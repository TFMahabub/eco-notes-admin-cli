/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#1d1d1d',
      secondary: '#fff',
      textColor: '#707676',
      headingTextColor: '#2c2c2c',
      gray:'#707676',
      borderColor: '#dfdfdf',
      lightGray: '#f1f1f1',
      error: '#EA5252',
      blue: '#6571FF',
      green: '#0AC074',
      pink: '#E83E8C',
      orenge: '#ff7828',
      pruple: '#b464c8',
      tag: {
        react: '#00D9FE',
        angular: '#E03537',
        vue: '#47BA87',
        express: '#868686',
        node: '#87CF30',
        mongoos: '#8C0808',
      }
    },
    extend: {
      spacing: {
        common: '16px',
        common_75: '18px',
        partGap: '25px',
        sectionGap: '18px',
        navbarHeight: '4rem'
      },
      transitionDuration: {
        'common': '300ms',
      }
    },
  },
  plugins: [],
}

