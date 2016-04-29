const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const startApiServer = function(PORT) {
  const app = express();
  const COMMENTS_FILE = path.join(__dirname, 'comments.json');

  app.set('port', PORT);

  app.use('/', express.static(path.join(__dirname, 'public/build')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  // Additional middleware which will set headers that we need on each request.
  app.use((req, res, next) => {
      // Set permissive CORS header - this allows this server to be used only as
      // an API server in conjunction with something like webpack-dev-server.
      res.setHeader('Access-Control-Allow-Origin', '*');

      // Disable caching so we'll always get the latest comments.
      res.setHeader('Cache-Control', 'no-cache');
      next();
  });

  app.get('/api/comments', (req, res) => {
    fs.readFile(COMMENTS_FILE, (err, data) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(JSON.parse(data));
    });
  });

  app.post('/api/comments', (req, res) => {
    fs.readFile(COMMENTS_FILE, (err, data) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      var comments = JSON.parse(data);
      var newComment = {
        id: Date.now(),
        author: req.body.author,
        text: req.body.text,
      };
      comments.push(newComment);
      fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
        res.json(comments);
      });
    });
  });


  app.listen(app.get('port'), () => {
    console.log(`Server started: http://localhost: ${app.get('port')}/`);
  });
}

module.exports = startApiServer;
