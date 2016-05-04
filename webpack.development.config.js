const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const webpack = require('webpack');

const config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8079',
    'webpack/hot/only-dev-server'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBuildNotifierPlugin({successSound:false})
  ],
  devtool: 'eval-source-map'
};

module.exports = config;
