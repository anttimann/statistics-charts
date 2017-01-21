const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/app.js'
  ],
    
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: 'babel-loader'
      }
    ]
  }
};