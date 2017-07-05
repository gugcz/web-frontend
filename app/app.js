// Init application
const express = require('express');
const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(require('connect-livereload')({
    port: 35729
  }));

  app.use('/public/images', express.static(__dirname + '/images'));
  app.use('/public/scripts', express.static(__dirname + '/scripts'));
}

app.set('view engine', 'pug');
app.set('views', [__dirname + '/views/']);

app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/public', express.static(__dirname + '/../public'));

app.use('/chapter', require('./controllers/chapter'));
app.use('/event', require('./controllers/event'));
app.use('/events', require('./controllers/events'));
app.use('/', require('./controllers/index'));


const server = app.listen(process.env.PORT || 8080, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('GUG.cz web listening at http://%s:%s', host, port)
});
