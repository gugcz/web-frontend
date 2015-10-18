// gulpfile.js
var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('server', function () {
  // Start the server at the beginning of the task
  server.run(['src/index.js']);

  // Restart the server when file changes
  gulp.watch(['src/**/*.html', 'src/**/*.jade'], server.notify);
  gulp.watch(['src/styles/**/*.scss'], ['styles:scss']);
  //gulp.watch(['{.tmp,src}/styles/**/*.css'], ['styles:css', server.notify]);
  //Event object won't pass down to gulp.watch's callback if there's more than one of them.
  //So the correct way to use server.notify is as following:
  gulp.watch(['{.tmp,src}/styles/**/*.css'], function(event){
    gulp.run('styles:css');
    server.notify(event);
    //pipe support is added for server.notify since v0.1.5,
    //see https://github.com/gimm/gulp-express#servernotifyevent
  });

  gulp.watch(['src/scripts/**/*.js'], ['jshint']);
  gulp.watch(['src/images/**/*'], server.notify);
  gulp.watch(['src/index.js', 'routes/**/*.js'], [server.run]);
});