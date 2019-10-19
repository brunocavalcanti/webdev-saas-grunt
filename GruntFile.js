module.exports = function(grunt) {
    grunt.initConfig({
        sass: {                             
          dist: {                      
            options: {                       
              style: 'expanded'
            },
            files: [{
                expand: true,
                cwd: 'sass',
                src: ['*.scss'],
                dest: 'public/dist/css',
                ext: '.css'
            }]
          }
        },
        clean: {
            build: ['public/dist']
          },
        csslint: {
            strict: {
                src: ['public/dist/css/*.css']
            }
        },  
        
      });
      
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.registerTask('default', ['clean','sass','csslint']);
  
  };