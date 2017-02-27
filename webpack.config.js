const 
  path      = require('path'),
  webpack   = require('webpack');

const config = {
  entry: {
    ngang: './app_client/ngang.js',
    LoginComponent: './src/LoginComponent.jsx'
  },
  output: {
    // path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js"
  },
  /*
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333
  },
  */
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};

module.exports = config;
