const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const PATHS = {
  app: path.join(__dirname, '/public/app.jsx'),
  build: path.join(__dirname, '/public/build'),
  indexTemplate: path.join(__dirname, '/public/template.html')
};

const common = {
    entry: PATHS.app,
    output: {
        path:    PATHS.build,
        filename: 'bundle.js',
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
          loader: "style!css"
         },
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
  'build': merge(common, {}),
  'default': merge(common, {})
};

const currentConfig = availableConfigs[process.env.epm_lifecycle_event] || availableConfigs['default'];

module.exports = validate(currentConfig);
