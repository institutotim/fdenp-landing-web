var path          = require('path');
const configGulp  = require('../gulp/config');

exports.config = {
	allScriptsTimeout: 500000,

	baseUrl: 'http://localhost:8888',

	framework: 'cucumber',

	//rootElement: ".app",

	specs: [
		configGulp.TESTS + '/features/cases/*.feature'
	],

	/**
	 * Chrome Driver
	 */
	//chromeDriver: configGulp.ROOT + '/node_modules/webdriver-manager/selenium/chromedriver',
	//seleniumServerJar: configGulp.ROOT + '/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.46.0.jar',

	//chromeDriver: configGulp.ROOT,
	//seleniumServerJar: configGulp.ROOT,

	cucumberOpts: {
		require: configGulp.TESTS + '/features/step_definitions/*.js',
		format: 'pretty'
	},

	capabilities: {
		'browserName': 'chrome',
		'version': 'ANY'
	},

	/**
	 * A callback function called once protractor is ready and available,
	 * and before the specs are executed.
	 *
	 * You can specify a file containing code to run by setting onPrepare to
	 * the filename string.
	 */
	onPrepare: function() {}
};
