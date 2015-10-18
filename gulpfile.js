// gulpfile.js
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('server', ['styles:scss'], function () {
  var server = plugins.express;

  // Start the server at the beginning of the task
  server.run(['src/index.js']);


  gulp.watch(['src/**/*.html', 'src/**/*.jade'], server.notify);
  gulp.watch(['src/styles/**/*.scss'], ['styles:scss']);
  gulp.watch(['src/public/css/**/*.css'], server.notify);
  gulp.watch(['src/scripts/**/*.js'], ['jshint']);
  gulp.watch(['src/images/**/*'], server.notify);
  gulp.watch(['src/index.js', 'routes/**/*.js'], [server.run]);
});

gulp.task('styles:scss', function () {
  return gulp.src('src/styles/**/*.scss')
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(gulp.dest('src/public/css'));
});
