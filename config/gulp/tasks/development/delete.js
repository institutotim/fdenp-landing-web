var gulp         = require('gulp');
var del          = require('del');
var configGulp   = require('../../config');

gulp.task('development:delete', function(cb) {
    del([configGulp.DEVELOPMENT], cb);
});