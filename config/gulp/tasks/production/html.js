var path          = require('path');
var gulp          = require('gulp');
var gulpIf        = require('gulp-if');
var rev           = require('gulp-rev');
var revReplace    = require('gulp-rev-replace');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');
var minifyHtml    = require('gulp-minify-html');
var preprocess    = require('gulp-preprocess');
var configGulp    = require('../../config');

gulp.task('production:html', function() {
    return gulp.src(configGulp.SOURCE + "/index.html")
        .pipe(preprocess({context: { NODE_ENV: 'production'}}))
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(revReplace({
            manifest: gulp.src(configGulp.ROOT + "/rev-manifest.json")
        }))
        .pipe(gulp.dest(configGulp.PRODUCTION));
});