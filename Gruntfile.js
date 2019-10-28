module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'script.js']
    },
    // watch
    watch: {
      scripts: {
        files: ['Gruntfile.js', 'server.js'],
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
