'use strict';

// Modules
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
      app:'./src/app.js'
    },
    output: {
        path: 'dist',
        filename: 'js/[name].bundle.js'
    },
    devServer: {
      contentBase: './dist',
      stats: 'minimal',
	  port: 8080
    },
    devtool: 'source-map',
    module: {
      loaders:[{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
              presets: ['es2015']
            }
      },{
        test: /\.scss$/,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap!sass?sourceMap')
      },{
        test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
        loader: 'url?limit=100000&name=fonts/[name].[ext]'
      },{
        test: /\.(png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url?limit=100000&name=images/[name].[ext]'
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "github api test",
        filename: 'index.html',
        favicon: './src/images/favicon.ico',
        template: './src/index.html',
        inject: 'body'
      }),
      new ExtractTextPlugin("[name].css"),
      new webpack.ProvidePlugin({
            '$': 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        })
    ],
    sassLoader: {
      includePaths: [path.resolve(__dirname, "node_modules")]
    }
};
