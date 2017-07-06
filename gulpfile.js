const debounce = require('debounce');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

gulp.task('server', ['styles:scss'], function () {
  const liveServer = plugins.liveServer;

  const server = liveServer.new('app/app.js');
  server.start();

  const notifyListener = (file) => server.notify(file);
  const debouncedNotifyListener = debounce(notifyListener, 1000);

  gulp.watch(['app/**/*.html', 'app/**/*.pug'], notifyListener);
  gulp.watch(['public/css/**/*.css'], notifyListener);
  gulp.watch(['app/images/**/*'], notifyListener);

  gulp.watch(['app/styles/**/*.scss'], ['styles:scss']);

  gulp.watch(['app/**/*.js'], (file) => {
    server.start();
    debouncedNotifyListener(file);
  });

  process.on('beforeExit', () => {
    server.stop();
    debouncedNotifyListener.clear();
  });
});

gulp.task('styles:scss', function () {
  return gulp.src('app/styles/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('copy-scripts', function () {
  gulp.src('./app/scripts/**/*')
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('copy-images', function () {
  gulp.src('./app/images/**/*')
    .pipe(gulp.dest('./public/images'));
});

gulp.task('copy-fonts', function () {
  gulp.src('./node_modules/materialize-css/dist/fonts/**/*')
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('build', ['styles:scss', 'copy-images', 'copy-scripts', 'copy-fonts']);
