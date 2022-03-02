import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import themeColors from 'theme/colors.json'
import themeSpacing from 'theme/spacing.json'
import themeSize from 'theme/size.json'
// ChakraUIのテーマを変更する場合はここに定義する
// Ref: https://chakra-ui.com/docs/theming/customize-theme
export const theme = extendTheme({
  space: Object.assign(themeSpacing, themeSize),
  colors: themeColors,
  sizes: Object.assign(themeSpacing, themeSize),
  config: { initialColorMode: 'system' },
  fonts: {
    heading: 'Noto Sans JP, Open Sans, sans-serif',
    body: 'Noto Sans JP, Open Sans, sans-serif'
  },
  textStyles: {
    headerHeading: {
      fontFamily: 'Oswald, sans-serif',
      fintWeight: 'bold',
      fontSize: '2rem'
    },
    numberIcon: {
      fontFamily: 'Oswald, sans-serif',
      fintWeight: 'bold'
    }
  },
  styles: {
    global: (props: any) => ({
      'html, body': {
        bg: mode(themeColors.bgLight, themeColors.bgDark)(props)
      },
      '*, *::before, &::after': {
        borderColor: mode(themeColors.gray[200], themeColors.gray[600])(props)
      }
    })
  }
})
export { themeColors, themeSpacing, themeSize }
