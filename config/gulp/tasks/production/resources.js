var gulp          = require('gulp');
var changed       = require('gulp-changed');
var merge         = require('merge-stream');
var configGulp    = require('../../config');

/**
 * Run the application in a local web server
 */
gulp.task('production:resources', function() {

    var resources = gulp.src([configGulp.SOURCE + "/resources/**"])
        .pipe(changed(configGulp.PRODUCTION + "/resources"))
        .pipe(gulp.dest(configGulp.PRODUCTION + "/resources"));

    var htaccess = gulp.src([configGulp.SOURCE + "/.htaccess"])
        .pipe(changed(configGulp.PRODUCTION))
        .pipe(gulp.dest(configGulp.PRODUCTION));

    var favicon = gulp.src([configGulp.SOURCE + "/resources/images/favicon.ico"])
        .pipe(changed(configGulp.PRODUCTION))
        .pipe(gulp.dest(configGulp.PRODUCTION));

    return merge(favicon, htaccess, resources);
});