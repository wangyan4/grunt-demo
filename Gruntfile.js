/*global module :true*/
module.exports = function (grunt) {
  grunt.initConfig({
    sprite: {
      files: {
        src: 'icons/*.png',
        dest: 'dist/bundle.png',
        destCss: 'dist/sprites.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-spritesmith');

  grunt.registerTask('default', ['sprite']);
};