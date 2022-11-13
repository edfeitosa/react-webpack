const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './'),
    open: true,
    compress: true,
    hot: true,
    port: 3000
  }
});