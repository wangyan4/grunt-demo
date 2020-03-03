/*global module :true*/
module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {
      "index.min.css":"index.css"
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin']); 
};