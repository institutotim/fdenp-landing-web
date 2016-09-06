var gulp          = require('gulp');
var gutil         = require('gulp-util');
var eslint        = require('gulp-eslint');
var changed       = require('gulp-changed');
var configGulp    = require('../../config');

/**
 * Check JavaScript sytax with JSHint
 */
gulp.task('eslint', function() {
  return gulp.src(configGulp.SOURCE + "/application/**/*.js")
    .pipe(changed(configGulp.DEVELOPMENT, {extension: '.js'}))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
