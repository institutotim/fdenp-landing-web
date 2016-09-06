var gulp          = require('gulp');
var del           = require('del');
var configGulp    = require('../../config');

gulp.task('production:delete', function(cb) {
    del([configGulp.PRODUCTION, configGulp.ROOT + "/rev-manifest.json"], cb);
});