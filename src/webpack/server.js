const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const logger = require('../utils/logger');
const config = require('../../webpack.config.js');

const startWebpackServer = function (PORT) {
  const server = new WebpackDevServer(webpack(config), {
    proxy: {
      '*' : `http://localhost:${PORT + 1}`
    },
    // Enable history API fallback so HTML5 History API based
     // routing works. This is a good default that will come
     // in handy in more complicated setups.
     historyApiFallback: true,

     // Unlike the cli flag, this doesn't set
     // HotModuleReplacementPlugin!
     hot: true,
     inline: true,
     progress: true,

     // Display only errors to reduce the amount of output.
     stats: 'errors-only'
    // host: process.env.HOST,
    // port: process.env.PORT

  });
  server.listen(PORT, 'localhost');
  logger.logSuccess('webpack server started', `http://localhost:${PORT}`)
};

module.exports = startWebpackServer;
