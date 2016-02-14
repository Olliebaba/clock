// gulpfile.js
'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    nodemon = require('gulp-nodemon'),
    browserSync = require('browser-sync').create();


gulp.task('start', function(){
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: {'NODE_ENV': 'development'}
  });
});

// uglify scss
gulp.task('sass', function () {
  return gulp.src('clock/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    //.pipe(cssnano())
    .pipe(gulp.dest('./clock/styles'))
    .pipe(browserSync.stream());
});
// uglify scss watcher
gulp.task('sass:watch', function () {
  gulp.watch('clock/styles/**/*', ['sass']);
});

// uglify javasript
gulp.task('compress', function() {
  return gulp.src('clock/js/prod/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('clock/js/'));
});
// uglify javasript watcher
gulp.task('compress:watch', function(){
  gulp.watch('clock/js/prod/*.js', ['compress']);
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "clock/"
    });
    gulp.watch('clock/js/prod/*.js', ['compress']);
    gulp.watch('clock/styles/**/*', ['sass']);
    gulp.watch("clock/*.html").on('change', browserSync.reload);
});
