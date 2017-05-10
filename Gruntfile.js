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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');


  //grunt.registerTask('default', ['sass']);

};