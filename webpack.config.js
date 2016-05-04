const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'src/frontend/app'),
  build: path.join(__dirname, '/build'),
  indexTemplate: path.join(__dirname, 'src/frontend/template.html'),
  eslintConfig: path.join(__dirname, '.eslintrc')
};

const common = {
    entry: [PATHS.app],
    output: {
        path:    PATHS.build,
        filename: 'bundle.js'
    },
    module: {
      preLoaders: [
        {
          test: /\.js?$/,
          loaders: ['eslint'],
          exclude: /node_modules/,
        }
      ],
      loaders: [
        {
          test: /\.js|.jsx$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.css$/,
          loader: 'style!css'
         }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: PATHS.indexTemplate,
        title: 'Example'
      })
  ],
  resolve: {
    alias: {
      buildDir: PATHS.build
    }
  },
  eslint: {
    configFile: PATHS.eslintConfig,
    emitError: true
  }
};

const buildConfig = function(environment) {
  switch(environment) {
    case 'development':
      const devConfig = require('./webpack.development.config');
      return merge(common, devConfig);
    default:
      return common;
  }
}

const currentConfig = buildConfig(process.env.NODE_ENV);

module.exports = validate(currentConfig);
