const colors = require('./theme/colors.json')
const spacing = require('./theme/spacing.json')
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // docs breakpoint: https://tailwindcss.com/docs/breakpoints#max-width-breakpoints
      screens: {
        'max-2xl': { max: '1535px' },
        'max-xl': { max: '1279px' },
        'max-lg': { max: '1023px' },
        'max-md': { max: '767px' },
        'max-sm': { max: '639px' },

        'only-xl': { min: '1280px', max: '1535px' },
        'only-lg': { min: '1024px', max: '1279px' },
        'only-md': { min: '768px', max: '1023px' },
        'only-sm': { min: '640px', max: '767px' }
      },
      colors: colors,
      spacing: spacing,
      letterSpacing: {
        tighter: '-.04em'
      },
      lineHeight: {
        tight: 1.2
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem'
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
      }
    }
  },
  variants: {
    extend: { textOpacity: ['dark'] }
  },
  plugins: []
}
