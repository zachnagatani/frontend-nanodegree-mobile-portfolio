module.exports = function (grunt, config) {
	grunt.config.merge({

		cssmin: {
	        css:{
	            files: {
	              // config.cssDistDir + 'style.min.css': [config.cssSrcDir + 'style.css']
	              'dist/css/style.min.css': ['src/css/style.css'],
	              'dist/views/css/style.min.css': ['src/views/css/style.css']
	            }
	        }
	    },

	    csslint: {
	      strict: {
	        src: [config.cssSrcDir + '*.css', config.viewsCssSrcDir + '*.css']
	      },
	      lax: {
	        options: {
	          csslintrc: '.csslintrc'
	        },
	        src: [config.cssSrcDir + '*.css', config.viewsCssSrcDir + '*.css']
	      }
	    },

	    imagemin: {
		    jpgs: {
		        options: {
		            progressive: true
		        },
		        files: [{
		            expand: true,
		            cwd: 'src/img',
		            src: ['*.{jpg,png,gif}'],
		            dest: 'dist/img/',
		        }]
		    }
		}


	});
};