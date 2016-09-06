var gulp          = require('gulp');
var changed       = require('gulp-changed');
var merge         = require('merge-stream');
var configGulp    = require('../../config');

/**
 * Run the application in a local web server
 */
gulp.task('development:resources', function() {

    var resources = gulp.src([configGulp.SOURCE + "/resources/**"])
        .pipe(changed(configGulp.DEVELOPMENT + "/resources"))
        .pipe(gulp.dest(configGulp.DEVELOPMENT + "/resources"));

    var htaccess = gulp.src([configGulp.SOURCE + "/.htaccess"])
        .pipe(changed(configGulp.DEVELOPMENT))
        .pipe(gulp.dest(configGulp.DEVELOPMENT));

    var favicon = gulp.src([configGulp.SOURCE + "/resources/images/favicon.ico"])
        .pipe(changed(configGulp.DEVELOPMENT))
        .pipe(gulp.dest(configGulp.DEVELOPMENT));

    return merge(favicon, htaccess, resources);
});