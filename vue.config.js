module.exports = {
  pages: {
    index: {
      entry: './src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    authorization: {
      entry: './src/pages/Authorization/main.js',
      template: 'public/index.html',
      filename: 'Authorization',
      title: 'Authorization',
      chunks: ['chunk-vendors', 'chunk-common', 'authorization']
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  assetsDir: '',
  productionSourceMap: false,
  filenameHashing: true
}
