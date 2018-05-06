module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	sass: {
    	dist: {
	      options: {
	        loadPath: ['node_modules/foundation-sites/scss']
	      },
	      files: {
	        'css/main.css': 'css/main.scss'
	      }
	    }
	},
    cssmin: {
	    target: {
	      files: [{
	        expand: true,
	        cwd: 'css',
	        src: ['main.css', '!*.min.css'],
	        dest: 'css/',
	        ext: '.min.css'
	        }]
	    }
    },
	watch: { // Compile everything into one task with Watch Plugin
		css: {
		  files: 'css/*.scss',
		  tasks: ['sass', 'cssmin']
		}
	}
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('default', ['sass']);
};