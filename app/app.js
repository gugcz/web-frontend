const express = require('express');
const asyncErrorChecking = require('./_asyncHelpers').asyncErrorChecking;

const indexController = require('./controllers/index');
const errorsController = require('./controllers/errors');
const sectionController = require('./controllers/section');
const chapterController = require('./controllers/chapter');
const eventController = require('./controllers/event');

const app = express();

if (process.env.NODE_ENV !== 'production') {

  app.use('/public/images', express.static(__dirname + '/images'));
  app.use('/public/scripts', express.static(__dirname + '/scripts'));
  app.use('/public/fonts', express.static(__dirname + '../node_modules/materialize-css/dist/fonts/'));
}

app.set('view engine', 'pug');
app.set('views', [__dirname + '/views/']);

//app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/public', express.static(__dirname + '/../public'));

app.use('/event/:eventUrl', asyncErrorChecking(eventController));
app.use('/events', require('./controllers/events'));
app.use('/join', require('./controllers/join'));
app.use('/history', require('./controllers/history'));

app.use('/section/:sectionName', asyncErrorChecking(sectionController));
app.use('/chapter/:chapterId', asyncErrorChecking(chapterController));
app.use('/', asyncErrorChecking(indexController));

// Enable browserSync in development mode

function listening(port) {
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

const server = app.listen(process.env.PORT || 3000, function() {
  console.log(process.env.NODE_ENV);
  const host = server.address().address;
  const port = server.address().port;

  if (process.env.NODE_ENV === 'development') {
    listening(port);
  }


  console.log('GUG.cz web listening at http://%s:%s', host, port)
});
