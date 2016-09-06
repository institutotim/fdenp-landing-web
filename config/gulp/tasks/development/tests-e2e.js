var gulp            = require('gulp');
var protractor      = require('gulp-protractor').protractor;
var configGulp      = require('../../config');

/**
 * Check JavaScript sytax with JSHint
 */
gulp.task('tests:e2e', function(cb) {
    /**
     * Run Protractor after http server is up and running
     */
    gulp.src([configGulp.TESTS + "/e2e/*.js"])
        .pipe(protractor({
            configFile: configGulp.CONFIG + "/protractor/chrome.js",
            args: []
        }))
        .on('error', function(e) {
            console.log(e);
            cb();
        }).on('end', function() {
            console.log('end');
            cb();
        });
});
