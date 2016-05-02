const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, '/public/app.jsx'),
  build: path.join(__dirname, '/public/build'),
  indexTemplate: path.join(__dirname, '/public/template.html')
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
  ]

};


const availableConfigs = {
  'development': merge(common, {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8079',
      'webpack/hot/only-dev-server'
    ],
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map'
  }),
  'default': merge(common, {})
};

const currentConfig = availableConfigs[process.env.NODE_ENV] || availableConfigs['default'];

module.exports = validate(currentConfig);
