import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1A1A1A',
          green: '#00AEA4',
          greenSecondary: '#02782F',
          red: '#f01',
          blue: '#052979',
          blue700: '#71D0FF',
          blue800: '#307AE9',
          white: '#FFFFFF',
          gray: {
            50: '#707070',
            100: '#F0F0F0',
            200: '#787878',
            300: '#D9D9D9',
            400: '#9D9D9D',
            700: '#353535',
          },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
