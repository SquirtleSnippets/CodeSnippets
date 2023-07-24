const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./client/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    static: {
      directory: './client',
    },
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // is this necesssary?:
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s?css/,
        // loaders  can be chained in reverse order, must be JS by the end
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  // allow imports without specifying the file extension
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
