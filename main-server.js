const apiServer = require('./api-server');
const webpackServer = require('./webpack-server');

const PORT = process.env.PORT || 8080;
const PROD = process.env.NODE_ENV === "production";

if(PROD) {
  apiServer.default(PORT);
} else {
  apiServer.default(PORT);
  webpackServer.default(PORT - 1);
}
