(function () {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var sass = require('gulp-sass')(require('sass'));
  var SASS_INCLUDE_PATHS = [path.join(process.cwd(), '/node_modules/')];

  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  //styles
  gulp.task('styles', function () {
    return gulp
      .src('src/*.scss')
      .pipe(gulp.dest('dist'))
      .pipe(sass({ outputStyle: 'expanded', includePaths: SASS_INCLUDE_PATHS }))
      .pipe($.rename({ basename: 'style' }))
      .pipe(gulp.dest('dist'));
  });
})();
