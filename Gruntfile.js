module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js']
    },
    // watch
    watch: {
      scripts: {
        files: ['Gruntfile.js'],
        tasks: ['jshint'],
        options: {
          spawn: false,
        },
      }
    }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register tasks
  grunt.registerTask('default', 'watch');
};
