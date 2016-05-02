const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const PATHS = {
  app: path.join(__dirname, 'src/frontend/app'),
  build: path.join(__dirname, '/build'),
  indexTemplate: path.join(__dirname, 'src/frontend/template.html')
};

// not sure this is needed anymore
process.env.BABEL_ENV = process.env.NODE_ENV;


const common = {
    entry: [PATHS.app],
    output: {
        path:    PATHS.build,
        filename: 'bundle.js'
    },
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          loaders: ['eslint-loader'],
          include: PATHS.app
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
        title: 'arroz'
      })
  ],
  resolve: {
    alias: {
      buildDir: PATHS.build
    }
  }
};


const availableConfigs = {
  'development': merge(common, {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8079',
      'webpack/hot/only-dev-server'
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new WebpackBuildNotifierPlugin({successSound:false})
    ],
    devtool: 'eval-source-map'
  }),
  'default': merge(common, {})
};

const currentConfig = availableConfigs[process.env.NODE_ENV] || availableConfigs['default'];

module.exports = validate(currentConfig);
