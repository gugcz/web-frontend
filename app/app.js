// Init application
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', [__dirname + '/views/']);

app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/public', express.static(__dirname + '/../public'));

app.use('/events', require('./controllers/events'));
app.use('/', require('./controllers/index'));


if (process.env.NODE_ENV !== 'production') {
  app.use(require('connect-livereload')({
    port: 35729
  }));
}

var server = app.listen(process.env.PORT || 8080, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GUG.cz web listening at http://%s:%s', host, port)
});
