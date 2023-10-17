/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        brancoAzulado: '#d0ebff',
        azulClaro: '#85cdfd',
        azul: '#3c84ab',
        azulEscuro: '#228be6',
        laranja: '#ff922b',
        gray0: '#f8f9fa',
        map: '#f2f4e6',
      },
      fontFamily: {
        jakarta: 'Plus Jakarta Sans',
        amatic: 'Amatic SC',
      },
      backgroundImage: {
        logo: "url('../src/assets/backgroundLogo.png')",
        page1: "url('../src/assets/page.png')",
        page2: "url('../src/assets/page-2.png')",
      },
      backgroundSize: {
        '50%': '80%',
        50: '50%',
      },
    },
  },
  plugins: [],
};
