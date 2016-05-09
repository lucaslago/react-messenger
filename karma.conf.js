const webpack = require('webpack');

module.exports = function(config) {
  config.set({
    basePath: '',
    singleRun: true,
    frameworks: ['mocha'],
    reporters: ['nyan'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    concurrency: Infinity,
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    webpack: {
      devtool: 'source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    }
  })
}
