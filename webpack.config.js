const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

const stylesExtractTextPlugin = new ExtractTextPlugin("styles.css");
const htmlExtractTextPlugin = new ExtractTextPlugin("index.html");

const config = {
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  },
  watchOptions: {
    aggregateTimeout: 300,
    ignored: "/node_modules/",
    poll: 1000
  },
  entry: {
    app: './app/app.js',
    vendors: './app/vendors.js'
  },
  output: {
    filename: "[name].bundle.js",
    publicPath: "/assets/",
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
    { 
      test: /\.html$/,
      use: htmlExtractTextPlugin.extract({
        use: "html-loader"
      })
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },
    {
      test: /\.(css|scss)$/,
      use: stylesExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          {'loader': 'css-loader'},
          {'loader': 'sass-loader'},]
      })
    }
    ]
  },
  plugins: [
    stylesExtractTextPlugin,
    htmlExtractTextPlugin,
  // new BrowserSyncPlugin({
  //     // browse to http://localhost:3000/ during development,
  //     // ./public directory is being served
  //     host: 'localhost',
  //     port: 3000,
  //     server: { baseDir: ['./'] }
  //   })
  ]
};

module.exports = config;
