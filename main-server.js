const apiServer = require('./api-server');
// TODO: remove this code duplication in many places
const PORT = process.env.PORT || 8080;
const PROD = process.env.NODE_ENV === "production";
console.log('Environment: ' + process.env.NODE_ENV );

if(PROD) {
  apiServer(PORT);
} else {
  const webpackServer = require('./webpack-server');
  apiServer(PORT);
  webpackServer(PORT - 1);
}
