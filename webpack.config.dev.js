const path = require('path');
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = [
  {
  entry: './src/server.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build')
  },
  target: 'node',
  externals: [nodeExternals()], // don't bundle node_modules dependencies
  module: {
    rules: [
      { test: /\.js$/, include: path.resolve(__dirname, 'src'), loader: "babel-loader" }
    ]
  }
},

{
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/assets')
  },
  module: {
    rules: [
      { test: /\.js$/, include: /src/, loader: "babel-loader" }
    ]
  }
}
];
