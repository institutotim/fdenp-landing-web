var path          = require('path');
var gulp          = require('gulp');
var gulpIf        = require('gulp-if');
var preprocess    = require('gulp-preprocess');
var changed       = require('gulp-changed');
var configGulp    = require('../../config');

/**
 * Run the application in a local web server
 */
gulp.task('development:html', ["development:bower"], function() {
    return gulp.src(configGulp.SOURCE + "/**/*.html")
        .pipe(changed(configGulp.DEVELOPMENT, {hasChanged: changed.compareSha1Digest, extension: '.html'}))
        .pipe(preprocess({context: { NODE_ENV: 'development'}}))
        .pipe(gulp.dest(configGulp.DEVELOPMENT));
});