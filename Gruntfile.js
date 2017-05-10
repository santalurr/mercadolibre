module.exports = function(grunt) {

  grunt.initConfig({

    sass: {                            
      dist: {                           
        options: {                      
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'app/main.css': 'app/styles/main.scss',       // 'destination': 'source'
        }
      }
    },
    watch: {
      css: {
        files: 'app/styles/*.scss',
        tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};