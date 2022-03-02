import type { StorybookConfig } from '@storybook/react/types'
import { propNames } from '@chakra-ui/styled-system'
import path from 'path'

const toPath = (_path: string) => path.join(process.cwd(), _path)
const excludedPropNames = propNames.concat(['as', 'apply', 'sx', '__css'])

export default {
  stories: [
    {
      directory: '../components',
      files: '**/(*.)?stories.@(js|jsx|ts|tsx)'
    }
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next-router',
    '@chakra-ui/storybook-addon'
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, '../')
      ]
      config.resolve.alias = {
        ...config.resolve.alias,
        '@emotion/core': toPath('node_modules/@emotion/react'),
        'emotion-theming': toPath('node_modules/@emotion/react')
      }
    }
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[local]___[hash:base64:2]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                importLoaders: 2,
                plugins: [require('tailwindcss'), require('autoprefixer')]
              }
            }
          },
          'sass-loader'
        ]
      })
    }
    return config
  },
  core: {
    builder: 'webpack5'
  }
} as StorybookConfig
