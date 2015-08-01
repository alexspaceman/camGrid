// GLOBALS
'use strict';

var express = require('express');

var app = express();
var port = process.env.PORT || 80;


// MIDDLEWARE
app.use(function (req, res, next) {
  console.log(req.method, req.url);
});


// ROUTES
app.get('/', function (req, res) {
  res.render('../html/index.html', { title: 'site' });
});


// START THE SERVER
app.listen(port);
console.log('listening on port ' + port);