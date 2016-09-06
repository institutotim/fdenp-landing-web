var path          = require('path');
var gulp          = require('gulp');
var rev           = require('gulp-rev');
var sass          = require('gulp-sass');
var cssmin        = require('gulp-cssmin');
var configGulp    = require('../../config');

/**
 * Run the application in a local web server
 */
gulp.task('production:sass', function() {
    return gulp.src(configGulp.SOURCE + "/sass/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rev())
        .pipe(gulp.dest(configGulp.PRODUCTION + "/resources/css"))
        .pipe(rev.manifest("rev-manifest.json", {
            base: configGulp.ROOT,
            merge: true
        }))
        .pipe(gulp.dest(configGulp.ROOT));
});