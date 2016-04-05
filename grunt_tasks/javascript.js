module.exports = function (grunt, config) {
	grunt.config.merge({
		concat: {
			js: {
				src: 'src/**/*.js',
				dest: 'src/js/perfmattersconcat.js',
			},
			viewsJs: {
				src: 'viewsSrc/**/*.js',
				dest: 'viewsDist/views/js/concat.js',
			}
		},

		uglify: {
		    options: {
		      mangle: false
		    },
		    my_target: {
		      files: {
		        'dist/js/perfmatters.min.js': ['src/js/perfmattersconcat.js']
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