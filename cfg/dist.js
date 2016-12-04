'use strict';

const path = require('path');
const webpack = require('webpack');

const baseConfig = require('./base');
const defaultSettings = require('./defaults');
const getEntry = require('./entry');
const generateHtmls = require('./html');

// Add needed plugins here
const BowerWebpackPlugin = require('bower-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 获取多页面的所有入口，每个入口文件名都为 index.js
let entries = getEntry('./src/pages/*/index.js');

let config = Object.assign({}, baseConfig, {
  entry: entries,
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery', // 使jquery变成全局变量,不用在自己文件require('jquery')了
      jQuery: 'jquery',
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    // 类库统一打包生成一个文件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: 3 // 提取使用3次以上的模块，打包到vendor里
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

// 生成html
config = generateHtmls(config);

module.exports = config;
