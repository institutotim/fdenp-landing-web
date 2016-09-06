var path          = require('path');
var gulp          = require('gulp');
var gulpIf        = require('gulp-if');
var sass          = require('gulp-sass');
var configGulp    = require('../../config');

/**
 * Run the application in a local web server
 */
gulp.task('development:sass', function() {
    return gulp.src(configGulp.SOURCE + "/sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(configGulp.DEVELOPMENT + "/resources/css"));
});