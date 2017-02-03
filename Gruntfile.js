module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),

    watch:{
      files:['*.html', 'src/**', 'spec/**', 'public/*.css'],
      tasks:''
    },

    express:{
      all:{
        options:{
          port:3000,
          hostname:'localhost',
          bases:['.'],
          livereload:true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('server', ['express','watch']);
};
