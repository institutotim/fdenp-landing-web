var path         = require('path');

/**
 * Constants
 */
const ROOT              = path.normalize( __dirname + "/../../" );
const CONFIG            = path.normalize( ROOT + "/config" );
const TESTS             = path.normalize( ROOT + "/tests" );
const SOURCE            = path.normalize( ROOT + "/src" );
const VENDOR            = path.normalize( ROOT + "/src/vendor" );
const DEVELOPMENT       = path.normalize( ROOT + "/build/development" );
const PRODUCTION        = path.normalize( ROOT + "/build/production" );

exports.ROOT             = ROOT;
exports.CONFIG           = CONFIG;
exports.TESTS            = TESTS;
exports.SOURCE           = SOURCE;
exports.VENDOR           = VENDOR;
exports.DEVELOPMENT      = DEVELOPMENT;
exports.PRODUCTION       = PRODUCTION;