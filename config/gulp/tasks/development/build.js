var gulp          = require('gulp');
var runSequence   = require('run-sequence');
var configGulp    = require('../../config');

/**
 * Run the application in a local web server
 */
gulp.task('development:build', function(cb) {
    runSequence(
        'development:delete',
        ['development:resources', 'development:bower', 'development:scripts', 'development:html'],
        'development:sass',
        cb
    );
});