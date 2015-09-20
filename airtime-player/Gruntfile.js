/* jshint node: true */

module.exports = function (grunt) {
	'use strict';

	// Livereload and connect variables
	var LIVERELOAD_PORT = 35729;
	var lrSnippet = require('connect-livereload')({
		port: LIVERELOAD_PORT
	});
	var mountFolder = function( connect, dir ) {
		return connect.static(require('path').resolve(dir));
	};

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			all: [
				'Gruntfile.js',
				'src/main.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		connect: {
			dev: {
				options: {
					port: 8999,
					hostname: 'localhost',
					// keepalive: true,
					// livereload: true,
					// open: true,
					// middleware: function( connect ) {
					// 	return [lrSnippet, mountFolder(connect, '.')];
					// }
				}
			}
		},

		open: {
			dev: {
				path: 'http://localhost:<%= connect.dev.options.port %>/index.html'
			}
		},

		watch: {
			dev: {
				files: [
					'src/**/*.js',

				],
				task: ['jshint'],
				options: {
					Livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-open');


	grunt.registerTask('default', [
		'jshint',
		'connect:dev:livereload',
		'open:dev',
		'watch:dev'
	]);

};
