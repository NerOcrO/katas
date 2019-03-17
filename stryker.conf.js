module.exports = (config) => {
  config.set({
    mutator: 'javascript',
    packageManager: 'npm',
    reporters: ['html', 'clear-text', 'progress', 'dashboard'],
    testRunner: 'jest',
    transpilers: ['babel'],
    coverageAnalysis: 'off',
    babel: {
      optionsFile: '.babelrc',
    },
    mutate: ['src/*.js'],
  })
}
