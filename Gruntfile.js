module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				files: {
          'js/Character.min.js': 'src/Character.js',
          'js/Roster.min.js': 'src/Roster.js',
          'js/BattleBoard.min.js': 'src/BattleBoard.js',
          'js/Battle.min.js': 'src/Battle.js',
          'js/main.min.js': 'src/main.js',
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['uglify']);

};
