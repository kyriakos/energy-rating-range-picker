module.exports = {
  type: 'react-component',
  babel: {
    plugins: ['react-html-attrs']
  },
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
