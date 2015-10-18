var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', [__dirname + '/views/'])

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/public', express.static(__dirname + '/public'));
app.use(function(request) {
  console.log(request.url);
});

app.use(require('connect-livereload')({
  port: 35729
}));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GUG.cz web listening at http://%s:%s', host, port);
});

app.use(require('connect-livereload')());
