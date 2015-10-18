// gulpfile.js
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('server', ['styles:scss'], function () {
  var server = plugins.express;

  // Start the server at the beginning of the task
  server.run(['app/app.js']);


  gulp.watch(['app/**/*.html', 'app/**/*.jade'], server.notify);
  gulp.watch(['app/styles/**/*.scss'], ['styles:scss']);
  gulp.watch(['app/public/css/**/*.css'], server.notify);
  gulp.watch(['app/scripts/**/*.js'], ['jshint']);
  gulp.watch(['app/images/**/*'], server.notify);
  gulp.watch(['app/app.js', 'routes/**/*.js'], [server.run]);
});

gulp.task('styles:scss', function () {
  return gulp.src('app/styles/**/*.scss')
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(gulp.dest('app/public/css'));
});
