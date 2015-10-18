var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/views'));

app.use('/node_modules', express.static(__dirname + '/../node_modules'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GUG.cz web listening at http://%s:%s', host, port);
});

app.use(require('connect-livereload')());