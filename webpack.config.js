const 
  glob      = require('glob'),
  path      = require('path'),
  webpack   = require('webpack');

const config = {
  // context: __dirname + '/app_client',
  entry: {
    app_client: glob.sync('./app_client/**/*.js'),
    jsx: glob.sync('./src/**/*.jsx'),
    vendor: [
      'angular',
      'react',
      'react-dom',
      'ngReact',
    ]
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
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    // new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;
