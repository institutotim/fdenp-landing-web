var gulp          = require('gulp');
var rev           = require('gulp-rev');
var uglify        = require('gulp-uglify');
var concat        = require('gulp-concat');
var bower         = require('main-bower-files');
var configGulp    = require('../../config');

/**
 * Run the application in a local web server
 */
gulp.task('production:scripts', function() {

    var files = []
        .concat(bower())
        .concat(configGulp.SOURCE + "/application/**/*.js");

    return gulp.src(files)
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(rev())
        .pipe(gulp.dest(configGulp.PRODUCTION + "/scripts"))
        .pipe(rev.manifest("rev-manifest.json", {
            base: configGulp.ROOT,
            merge: true
        }))
        .pipe(gulp.dest(configGulp.ROOT));
});