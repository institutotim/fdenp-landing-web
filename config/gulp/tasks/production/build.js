var gulp          = require('gulp');
var runSequence   = require('run-sequence');
var configGulp    = require('../../config');

/**
 * Run the application in a local web server
 */
gulp.task('production:build', function(cb) {
    runSequence(
        'production:delete',
        ['production:resources', 'production:scripts'],
        'production:sass',
        'production:html',
        cb
    );
});