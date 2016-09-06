var path           = require('path');
var gulp           = require('gulp');
var runSequence    = require('run-sequence');
var watch          = require('../../util/watch');
var configGulp     = require('../../config');

gulp.task('production:serve', ['production:build'], function() {
    /**
     * @todo Gulp has a third library called Gaze which has a lot of bugs
     * https://github.com/gulpjs/gulp/issues/651
     * https://github.com/shama/gaze/issues/123
     * https://github.com/shama/gaze/issues/137
     * https://github.com/shama/gaze/issues/167
     */
    watch({
        root: configGulp.SOURCE,
        match: [{
            when: "application/**/*.js",
            then: function() {
                runSequence("production:scripts", "production:html")
            }
        }, {
            when: "sass/**/*.scss",
            then: function() {
                runSequence("production:sass", "production:html")
            }
        }, {
            when: "*.html",
            then: function() {
                runSequence("production:html")
            }
        }]
    });
});