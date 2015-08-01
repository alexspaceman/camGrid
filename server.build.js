// GLOBALS
'use strict';

var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

// MIDDLEWARE
app.use(function (req, res, next) {
  console.log(req.method, req.url);
});

// ROUTES
app.use(express['static']('html'));
// app.get('/', (req, res, next) => {
//   let options = {
//     root: __dirname + '/html/'
//   }

//   res.sendFile('index.html', options, (err) => {
//     if (err) {
//       console.log(err)
//       res.status(err.status).end()
//     }
//     else {
//       console.log('sent index.html')
//     }
//   })
// })

// START THE SERVER
app.listen(port);
console.log('listening on port ' + port);