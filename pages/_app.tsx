import 'faust.config'
import 'styles/global.scss'
import 'styles/font/css/solid.min.css'
import 'prism-themes/themes/prism-atom-dark.css'
import 'focus-visible/dist/focus-visible'
import '@fontsource/noto-sans-jp'
import '@fontsource/noto-sans'
import '@fontsource/oswald'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { FaustProvider } from '@faustjs/next'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'components/atoms/ThemeProvider'
import { theme } from 'modules/theme'
import { client } from 'client'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FaustProvider client={client} pageProps={pageProps}>
        <ChakraProvider theme={theme}>
          <ThemeProvider />
          <Component {...pageProps} />
        </ChakraProvider>
      </FaustProvider>
    </>
  )
}
