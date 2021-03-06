const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const isDevelopment = process.env.NODE_ENV !== 'production';
const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(srcDir, 'index.tsx'),

  output: {
    filename: 'bundle.js',
    path: distDir
  },

  mode: isDevelopment ? 'development' : 'production',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],

    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },


  module: {
    rules: [
      {
        test: /\.(tsx?|d.ts)$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      },
      {
        test: /\.(gif|jpe?g|png|gif|svg|eot|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/[name].[hash:8].[ext]'
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
      },
      {
        test: /\.module\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      }
    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ].concat(isDevelopment ? [new webpack.HotModuleReplacementPlugin()] : []),

  devServer: {
    compress: true,
    port: 3000,
  },
  externals: {
    Config: JSON.stringify({
      serverUrl: '/'
    })
  }
};
