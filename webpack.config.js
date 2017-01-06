const path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/app.js'
  ],
    
  output: {
    path: '/public'
  },
  // webpack-dev-middleware options
  // See https://github.com/webpack/webpack-dev-middleware
  assets: {

  },

  // webpack-hot-middleware options
  // See https://github.com/glenjamin/webpack-hot-middleware
  hot: {},
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel-loader']
      }
    ]
  },
};