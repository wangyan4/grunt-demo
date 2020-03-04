/*global module :true*/
module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['index.js', 'util.js'],
        dest: 'dist/bundle.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);
};