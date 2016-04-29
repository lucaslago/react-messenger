const path = require('path');

module.exports = {
    entry:  __dirname + '/public/app.js',
    output: {
        path:     __dirname + '/public/builds',
        filename: 'bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.css$/,
          loader: "style!css"
         },

      ]
    }
};
