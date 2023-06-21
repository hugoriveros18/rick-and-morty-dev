/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
      textColor: {
        primary: '#fff',
        secondary: '#9a35ef',
        tertiary: '#61d718'
      },
      fontFamily: {
        gilmory: ['var(--font-gilroy)'],
        street: ['var(--font-street)'],
        roboto: ['var(--font-roboto)'],
        circular: ['var(--font-circular)'],
      },
      backgroundColor: {
        primaryGradient: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
      }
    }
  },
  plugins: [],
}
