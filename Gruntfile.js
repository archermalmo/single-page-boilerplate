module.exports = function(grunt) {
  require('load-grunt-config')(grunt);
  grunt.registerTask('prod', ['sass', 'autoprefixer', 'modernizr', 'concat', 'uglify', 'haml', 'cssmin', 'imagemin', 'htmlmin', 'modernizr']);
  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('grunt', ['watch']);
  grunt.registerTask('setup9876gkjg', ['bowercopy']); // WARNING: Running this task will wipe out your site.
};