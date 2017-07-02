// gulpfile.js
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('server', ['styles:scss'], function() {
  var server = plugins.express;

  // Start the server at the beginning of the task
  server.run(['app/app.js']);

  gulp.watch(['app/**/*.html', 'app/**/*.jade'], server.notify);
  gulp.watch(['app/styles/**/*.scss'], ['styles:scss']);
  gulp.watch(['app/public/css/**/*.css'], server.notify);
  gulp.watch(['app/scripts/**/*.js'], ['jshint']);
  gulp.watch(['app/images/**/*'], server.notify);
  gulp.watch(['app/**/*.js'], [server.run]);
});

gulp.task('styles:scss', function() {
  return gulp.src('app/styles/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('copyscripts', function() {
  gulp.src('./app/scripts/**/*')
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('copyimages', function() {
  gulp.src('./app/images/**/*')
    .pipe(gulp.dest('./public/images'));
});


gulp.task('build', ['styles:scss', 'copyimages', 'copyscripts']);
