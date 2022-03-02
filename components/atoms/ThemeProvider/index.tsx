import { useColorMode } from '@chakra-ui/color-mode'
import { isBrowser, noop } from '@chakra-ui/utils'
import React, { useEffect } from 'react'

const mockBody = {
  classList: { add: noop, remove: noop }
}
const classNames = {
  light: 'light',
  dark: 'dark'
}

export const ThemeProvider = React.memo(function ThemeProvider() {
  const { colorMode } = useColorMode()
  useEffect(() => {
    // In Tailwind.css, className.dark is set to determine that the className.dark is dark mode, so the DarkMode of ChakraUI is determined and the settings in Tailwind.css are applied.
    // Tailwind.css Document: https://tailwindcss.com/docs/dark-mode
    // ChakraUI Ref: https://github.com/chakra-ui/chakra-ui/blob/75edcf41e7ff4acc2569f2169949063c164d8f6e/packages/color-mode/src/color-mode-provider.tsx#L95
    const isDark = colorMode === 'dark'
    const html = isBrowser ? document.documentElement : mockBody
    html.classList.add(isDark ? classNames.dark : classNames.light)
    html.classList.remove(isDark ? classNames.light : classNames.dark)
    // return () => {}
  }, [colorMode])
  return null
})
