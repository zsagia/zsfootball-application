'use strict';

var connect = require('gulp-connect'); 
var gulp = require('gulp');
var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'zsFootballApp.css',
	bundleFileName: 'zsFootballApp.js',
	moduleName: 'metal-zsFootballApp',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]
});

gulp.task('server', function() {
	connect.server({
		port: 8888
	});
});

