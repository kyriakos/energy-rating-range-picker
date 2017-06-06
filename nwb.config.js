module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'RatingPicker',
      externals: {
        react: 'React'
      }
    }
  }
}
