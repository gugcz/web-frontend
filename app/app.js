// Init application
// Express Framework
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', [__dirname + '/views/']);

//app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/public', express.static(__dirname + '/../public'));

app.use('/chapter', require('./controllers/chapter'));
app.use('/event', require('./controllers/event'));
app.use('/events', require('./controllers/events'));
app.use('/', require('./controllers/index'));


// Enable browserSync in development mode

function listening() {
  var browserSync = require('browser-sync');
  var config = {
    files: ["public/**/*.{js,css}", "app/views/**/*.pug"],
    logLevel: 'info',
    logPrefix: 'GUG.cz frontend',
    logSnippet: false,
    reloadDelay: 100,
    //reloadOnRestart: true,
    port: port + 1,
    proxy: 'localhost:' + port,
    ui: false,
  };
  var bs = browserSync(config);
  //app.use(require('connect-browser-sync')(bs));

}

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  if (app.get('env') === 'development') {
    listening();
  }
  var host = server.address().address;

  console.log('GUG.cz web listening at http://%s:%s', host, port)
});
