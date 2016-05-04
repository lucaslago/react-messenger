const logger = require('../utils/logger');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const COMMENTS_FILE = path.join(__dirname, 'comments.json');

const disableCaching = (req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
};
const logServerError = (errorMessage) => {
  logger.logError('Error', errorMessage);
}

const startApiServer = function(PORT) {
  const app = express();

  app.use('/', express.static(path.join(__dirname, '../../build')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(disableCaching);
  app.set('port', PORT);

  app.get('/api/comments', (req, res) => {
    fs.readFile(COMMENTS_FILE, (err, data) => {
      if (err) {
        logServerError(err);
        process.exit(1);
      }
      res.json(JSON.parse(data));
    });
  });

  app.post('/api/comments', (req, res) => {
    fs.readFile(COMMENTS_FILE, (err, data) => {
      if (err) {
        logServerError(err);
        process.exit(1);
      }
      var comments = JSON.parse(data);
      var newComment = {
        id: Date.now(),
        author: req.body.author,
        text: req.body.text
      };
      comments.push(newComment);
      fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), (err) => {
        if (err) {
          logServerError(err);
          process.exit(1);
        }
        res.json(comments);
      });
    });
  });


  app.listen(app.get('port'), () => {
    logger.logSuccess('API server started:', `http://localhost:${app.get('port')}/`)
  });
}

module.exports = startApiServer;
