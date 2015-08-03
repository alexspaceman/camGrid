// GLOBALS
'use strict';

var express = require('express');

var app = express();

var router = express.Router();
var apiRouter = express.Router();

var port = process.env.PORT || 80;

var devHost = 'http://localhost';
var prodHost = 'http://45.55.93.141';

var host = prodHost;

var routerOptions = { root: __dirname };

// MIDDLEWARE
router.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

// ROUTES
// index
router.get('/', function (req, res) {
  res.sendFile('html/index.html', routerOptions, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('loaded index');
    }
  });
});

router.get('/about', function (req, res) {
  res.sendFile('html/about.html', routerOptions, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('loaded about');
    }
  });
});

apiRouter.get('/', function (req, res) {
  res.send('api page');
});

// game
router.get('/game', function (req, res) {
  res.sendFile('html/game.html', routerOptions, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('loaded game');
    }
  });
});

router.get('/js/utils/three.js', function (req, res) {
  res.sendFile('js/utils/three.js', routerOptions, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('loaded threejs');
    }
  });
});

router.get('/js/build/game.build.js', function (req, res) {
  res.sendFile('js/build/game.build.js', routerOptions, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('loaded game');
    }
  });
});

// USER ROUTER
app.use('/', router);
app.use('/api', apiRouter);

// START THE SERVER
app.listen(port);
console.log('listening on port ' + port);