(function () {
  'use strict';

  var gulp = require('gulp');
  const sass = require('gulp-sass')(require('sass'));

  //styles
  gulp.task('docs', function () {
    return gulp
      .src('docs/style.scss')
      .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
      .pipe(gulp.dest('docs'));
  });
})();
