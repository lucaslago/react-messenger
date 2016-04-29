const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
  app: path.join(__dirname, '/public/app.jsx'),
  build: path.join(__dirname, '/public/build'),
  indexTemplate: path.join(__dirname, '/public/template.html')
};

module.exports = {
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
    plugins: [new HtmlWebpackPlugin({
      template: PATHS.indexTemplate,
      title: 'arroz'
    })]

};
