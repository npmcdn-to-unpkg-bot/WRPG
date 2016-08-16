module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/Character.js','src/js/Roster.js','src/js/BoardCell.js','src/js/BattleBoard.js','src/js/Battle.js','src/js/dom-functions.js','src/js/main.js'],
        dest: 'js/<%= pkg.name %>.js'
      }
    },
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				files: {
          'js/<%= pkg.name %>.min.js': 'js/<%= pkg.name %>.js'
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['concat', 'uglify']);

};
