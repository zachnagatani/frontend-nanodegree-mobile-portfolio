module.exports = function (grunt, config) {
	grunt.config.merge({
		concat: {
			js: {
				src: 'src/js/*.js',
				dest: 'src/js/perfmattersconcat.js',
			},
			// viewsJs: {
			// 	src: 'src/views/js/*.js',
			// 	dest: 'dist/views/js/concat.js',
			// }
		},

		uglify: {
		    options: {
		      mangle: false
		    },
		    my_target: {
		      files: {
		        'dist/js/perfmatters.min.js': ['src/js/perfmattersconcat.js'],
		        'dist/views/js/main.min.js': ['src/views/js/main.js']
		      }
		    }
		},

		jshint: {
			all: [
			'Gruntfile.js',
			config.jsSrcDir + "*.js",
			config.viewsJsSrcDir + "*.js"
			]
		}
	});
};