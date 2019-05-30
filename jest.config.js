module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**',
  ],
  coverageReporters: [
    'html',
    'lcov',
    'text',
  ],
  verbose: true,
}
