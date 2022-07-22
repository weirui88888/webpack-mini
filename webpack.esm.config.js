const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './esm/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './esm/dist'),
  },
}
