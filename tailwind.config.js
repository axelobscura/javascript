/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        medium: '500',
        bold: '700',
      },
      colors: {
        js: {
          yellow: '#f7df1e',
          'yellow-dim': '#c4b018',
          black: '#0a0a0a',
          void: '#050505',
          surface: '#121212',
          ink: '#f5f5f5',
          muted: '#9a9a9a',
        },
        yellow: '#f7df1e',
        'gray-dark': '#121212',
        gray: '#6e6e6e',
        'gray-light': '#c7c7c7',
      },
    },
  },
  plugins: [],
}
