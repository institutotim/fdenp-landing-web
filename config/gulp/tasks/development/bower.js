var gulp          = require('gulp');
var bower         = require('main-bower-files');
var configGulp    = require('../../config');

/**
 * Run the application in a local web server
 */
gulp.task('development:bower', function() {
    return gulp.src(bower(), {base: configGulp.VENDOR })
        .pipe(gulp.dest(configGulp.DEVELOPMENT + "/vendor"));
});