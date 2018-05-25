const express = require('express');
const asyncErrorChecking = require('./_asyncHelpers').asyncErrorChecking;
const compression = require('compression');


const indexController = require('./controllers/index');
const errorsController = require('./controllers/errors');
const sectionController = require('./controllers/section');
const chapterController = require('./controllers/chapter');
const eventController = require('./controllers/event');

const app = express();
app.use(compression());

if (process.env.NODE_ENV !== 'production') {
  app.use('/images', express.static(__dirname + '/assets/images'));
  app.use('/scripts', express.static(__dirname + '/scripts'));
  app.use('/fonts', express.static(__dirname + '/../public/fonts/'));
  app.use('/public', express.static(__dirname + '/../public')); // TODO fix double public folder, also in package.json
  app.use('/js', express.static(__dirname + '/../public/js')); // TODO fix double public folder, also in package.json
  app.use('/css', express.static(__dirname + '/../public/css')); // TODO fix double public folder, also in package.json
} else {
  app.use(express.static('public'));
}

app.set('view engine', 'pug');
app.set('views', [__dirname + '/views/']);

// app.use('/node_modules', express.static(__dirname + '/../node_modules'));


app.use('/cs/akce/:eventUrl', function (req, res) {
  return res.redirect('/event/' + req.param('eventUrl'));
});
app.use('/cs/stranky/pridej-se', function (req, res) {
  return res.redirect('/join');
});

app.use('/cs/stranky/o-nas', function (req, res) {
  return res.redirect('/');
});

app.use('/event/:eventUrl', asyncErrorChecking(eventController));
app.use('/events', require('./controllers/events'));
app.use('/join', require('./controllers/join'));
app.use('/history', require('./controllers/history'));

app.use('/cs/:sectionName/skupiny/:chapterName', function (req, res) {
  return res.redirect('/chapter/' + req.param('sectionName') + '-' + req.param('chapterName'));
});


app.use('/cs/:sectionName', function (req, res) {
  return res.redirect('/section/' + req.param('sectionName'));
});


app.use('/section/:sectionName', asyncErrorChecking(sectionController));
app.use('/chapter/:chapterId', asyncErrorChecking(chapterController));

app.use('/cs', function (req, res) {
  return res.redirect('/');
});


app.get('/', asyncErrorChecking(indexController));

app.use(function (req, res, next) {
  res.status(404).render('errors/404');
});

// Localhost setup
if (process.env.NODE_ENV === 'development') {
  function listening(port) {
    let browserSync = require('browser-sync');
    let config = {
      files: ['public/**/*.{js,css}', 'app/views/!**/!*.pug'],
      logLevel: 'info',
      logPrefix: 'GUG.cz frontend',
      logSnippet: false,
      reloadDelay: 100,
      // reloadOnRestart: true,
      port: port + 1,
      proxy: 'localhost:' + port,
      ui: false
    };
    let bs = browserSync(config);
    // app.use(require('connect-browser-sync')(bs));
  }

  const server = app.listen(process.env.PORT || 3000, function () {
    console.log(process.env.NODE_ENV);
    const host = server.address().address;
    const port = server.address().port;

    if (process.env.NODE_ENV === 'development') {
      listening(port);
    }
  });
}

exports.app = app;
