var path           = require('path');
var gulp           = require('gulp');
var runSequence    = require('run-sequence');
var watch          = require('../../util/watch');
var configGulp     = require('../../config');

gulp.task('development:serve', ['development:build'], function() {
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
                runSequence("development:scripts")
            }
        }, {
            when: "sass/**/*.scss",
            then: function() {
                runSequence("development:sass")
            }
        }, {
            when: "*.html",
            then: function() {
                runSequence("development:html")
            }
        }]
    });
});