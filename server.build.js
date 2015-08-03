// GLOBALS
'use strict';

var express = require('express');

var app = express();

var router = express.Router();
var apiRouter = express.Router();

var port = process.env.PORT || 80;

var routerOptions = { root: __dirname };

// MIDDLEWARE
router.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

// ROUTES
router.get('/', function (req, res) {
  res.send('<h1>Spaceman\'s Office</h1><h3>Sitemap</h3><h5><a href="http://localhost:' + port + '/about">About</a></h5>');
});

router.get('/about', function (req, res) {
  res.send('<h1>About</h1><h5>This website will house some organizational tools and projects</h5><h5><a href="http://localhost:' + port + '/">Home</a></h5>');
});

apiRouter.get('/', function (req, res) {
  res.send('api page');
});

// index
router.get('/index', function (req, res) {
  res.sendFile('html/index.html', routerOptions, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('loaded index');
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