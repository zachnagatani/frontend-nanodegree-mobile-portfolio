module.exports = function(grunt) {

	var config = grunt.file.readYAML('gruntconfig.yml');

	require('load-grunt-tasks')(grunt);

	require('./grunt_tasks/css.js')(grunt, config);
	require('./grunt_tasks/javascript.js')(grunt, config);

	grunt.registerTask('default', [
		'jshint',
		'concat',
		'uglify',
		'cssmin'
  	]);

  	// TODO: add git functionality, cssminification, css inlining?, css/html linting
};