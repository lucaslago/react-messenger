const apiServer = require('./api-server');
const webpackServer = require('./webpack-server');

// TODO: remove this code duplication in many places
const PORT = process.env.PORT || 8080;
const PROD = process.env.NODE_ENV === "production";
console.log('Environment: ' + process.env.NODE_ENV );
if(PROD) {
  apiServer(PORT);
} else {
  apiServer(PORT);
  webpackServer(PORT - 1);
}
