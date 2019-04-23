module.exports = {
  moduleFileExtensions: [ 'js', 'vue' ],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}'
  ]
}
