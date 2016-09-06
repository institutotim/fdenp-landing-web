var gulp          = require('gulp');
var gulpIf        = require('gulp-if');
var changed       = require('gulp-changed');
var configGulp    = require('../../config');

/**
 * Run the application in a local web server
 */
gulp.task('development:scripts', function() {
    return gulp.src(configGulp.SOURCE + "/application/**/*.js")
        .pipe(changed(configGulp.DEVELOPMENT + "/scripts/application", {hasChanged: changed.compareSha1Digest, extension: '.js'}))
        .pipe(gulp.dest(configGulp.DEVELOPMENT + "/scripts/application"));
});