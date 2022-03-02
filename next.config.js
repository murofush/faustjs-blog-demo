const path = require('path')
const { withFaust } = require('@faustjs/next')
/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  // Ref: https://nextjs.org/docs/basic-features/eslint#linting-custom-directories
  eslint: {
    dirs: ['pages/', 'components/', 'modules/', 'clinent/index.ts']
  }
})
