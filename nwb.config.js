module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'SETSAFESTATE',
      externals: {
        react: 'React'
      }
    }
  }
}
