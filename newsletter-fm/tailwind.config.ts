import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("/assets/images/icon-list.svg")',
      },
    colors: {
      tomato: 'hsl(4, 100%, 67%)',
      'dark-slate-grey': 'hsl(234, 29%, 20%)',
      'charcoal-grey': 'hsl(235, 18%, 26%)',
      'grey': 'hsl(231, 7%, 60%)',
      // white: 'hsl(0, 0%, 100%)',

    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
