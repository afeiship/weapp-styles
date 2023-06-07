(function () {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var sass = require('gulp-sass')(require('sass'));
  var SASS_INCLUDE_PATHS = [path.join(__dirname, '..', '/node_modules/')];

  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  //styles
  gulp.task('styles', function () {
    return gulp
      .src('src/*.scss')
      // .pipe(gulp.dest('dist'))
      .pipe($.jswork.pkgHeader())
      .pipe(sass({ outputStyle: 'expanded', includePaths: SASS_INCLUDE_PATHS }))
      .pipe(gulp.dest('dist'));
  });
})();
