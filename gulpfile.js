const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

gulp.task('server', ['styles:scss'], function () {
    const liveServer = plugins.liveServer;
    const server = liveServer.new('app/app.js');
    server.start();

    const notifyListener = (...args) => server.notify(...args);

    gulp.watch(['app/**/*.html', 'app/**/*.pug'], notifyListener);
    gulp.watch(['app/styles/**/*.scss'], ['styles:scss']);
    gulp.watch(['app/public/css/**/*.css'], notifyListener);
    gulp.watch(['app/scripts/**/*.js'], ['jshint']);
    gulp.watch(['app/images/**/*'], notifyListener);
    gulp.watch(['app/**/*.js'], () => server.start());

    process.on('beforeExit', () => {
        server.stop();
    });
});

gulp.task('styles:scss', function () {
    return gulp.src('app/styles/**/*.scss')
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(gulp.dest('public/css'));
});

gulp.task('copyscripts', function () {
    gulp.src('./app/scripts/**/*')
        .pipe(gulp.dest('./public/scripts'));
});

gulp.task('copyimages', function () {
    gulp.src('./app/images/**/*')
        .pipe(gulp.dest('./public/images'));
});

gulp.task('build', ['styles:scss', 'copyimages', 'copyscripts']);
