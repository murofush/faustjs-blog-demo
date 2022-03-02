import { RouterContext } from 'next/dist/shared/lib/router-context'

import { Parameters } from '@storybook/react'
import { withPerformance } from 'storybook-addon-performance'
import { theme } from 'modules/theme'
import 'styles/global.scss'
import '@fontsource/noto-sans-jp'
import '@fontsource/noto-sans'
import '@fontsource/oswald'

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: 'Direction',
    description: 'Direction for layout',
    defaultValue: 'LTR',
    toolbar: {
      icon: 'globe',
      items: ['LTR', 'RTL']
    }
  }
}

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on.*' },
  chakra: {
    theme,
    resetCSS: true
  },
  nextRouter: {
    Provider: RouterContext.Provider
  },
  layout: 'fullscreen'
}

export const decorators = [withPerformance]
