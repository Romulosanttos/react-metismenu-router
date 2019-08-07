const webpack = require('webpack');
const config = require('./dist.conf');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Webpack Production Settings - Minified
module.exports = Object.assign(config, {
  output: Object.assign(config.output, {
    filename: 'react-metismenu-router.min.js',
  }),
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
        },
      }),
    ]
  }
});