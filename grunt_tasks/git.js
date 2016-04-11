module.exports = function (grunt, config) {
	grunt.config.merge({
		'gh-pages': {
			options: {
				base: 'dist'
			},
			dist: ['**']
		},

		htmlmin: {                                     // Task
		    dist: {                                      // Target
		      options: {                                 // Target options
		        removeComments: true,
		        collapseWhitespace: true
		      },
		      files: {                                   // Dictionary of files
		        'dist/index.html': 'src/index.html',     // 'destination': 'source'
		      }
		    }
		}
	});
};