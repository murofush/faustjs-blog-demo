module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'prismjs',
      {
        languages: [
          'javascript',
          'css',
          'markup',
          'docker',
          'go',
          'graphql',
          'ignore',
          'json',
          'markdown',
          'nginx',
          'php',
          'python',
          'jsx',
          'tsx',
          'regex',
          'sql',
          'typescript',
          'yaml'
        ],
        css: true
      }
    ]
  ]
}
