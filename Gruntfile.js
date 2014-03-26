module.exports = function(grunt) {

  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

// SETUP:

    bowercopy: {
        options: {
            // Bower components folder will be removed afterwards
            clean: true
        },
        boilerplate: {
            files: {
              'assets/sass': 'sass-structure'
            }
        },
    },

// CSS:

    sass: {
      dist: {
        options: {
          // cssmin will minify later
          style: 'expanded'
        },
        files: {
          'public/css/global.css': 'assets/sass/main.sass'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 10 version']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'public/css/global.css',
        dest: 'public/css/'
      }
    },
    cssmin: {
      combine: {
        files: {
          'public/css/global.css': ['public/css/global.css'],
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'public/index.html': 'public/index.html',
        }
      },
    },

// JAVASCRIPT:

    concat: {
      dist: {
        src: [
          'assets/js/lib/*.js',
          'assets/js/main.js'
        ],
        dest: 'public/js/main.js'
      }
    },
    uglify: {
      build: {
        src: 'public/js/main.js',
        dest: 'public/js/main.js'
      }
    },

// IMAGES:

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public/images/'
        }]
      }
    },

// OTHER:

    livereload: {
      options: {
        base: 'public',
      },
        files: ['public/css/global.css', 'public/*.html']
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public/',
          keepalive: true,
        }
      }
    },

// HAML
    haml: {
      dist: {
        files: {
          'public/index.html': 'assets/index.haml'
        }
      },
    },

// WATCH
    watch: {
      haml: {
        files: ['public/index.html', 'assets/index.haml'],
        tasks: ['haml'],
        options: {
          spawn: false,
          livereload: true,
        }
      },
      css: {
        files: ['assets/sass/*.sass', 'assets/sass/parts/*.sass', 'assets/sass/*.scss', 'assets/sass/parts/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false,
          livereload: true,
        }
      },
      scripts: {
        files: ['assets/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
          livereload: true,
        }
      },
    },
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['sass', 'autoprefixer', 'concat', 'uglify', 'imagemin', 'haml', 'htmlmin', 'cssmin']);
  grunt.registerTask('setup', ['bowercopy']);
  grunt.registerTask('dev', ['watch']);

};