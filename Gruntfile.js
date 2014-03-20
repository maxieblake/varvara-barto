module.exports = function (grunt) {
  require('time-grunt')(grunt);

  grunt.initConfig ({
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['*.html']
      }, //html
      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['sass:dist']
      }, //sass
      jade: {
        files: ['jade/*.jade'],
        tasks: ['jade:compile']
      }, //jade
      misc: {
        files: [
        '*.{ico,png,txt}',
        '.htaccess',
        'images/{,*/}*.webp, *.png, *.jpeg',
        'js/{,*/}*.js',
        'fonts/{,*/}*.*' ],
        tasks: ['copy:dist']
      } //misc
    }, // watch
      
      // Using grunt-contrib-sass to get sourcemaps. 
      // For 20.03.2014 there is no support in grunt-contrib-compasss for them.
      sass: {
        dist: {
          options: {
            style: 'expanded',
            loadPath: 'bower_components/foundation/scss',
            sourcemap: true,
            trace: true,
            compass: true
            },
          files: {
            'dist/css/style.css': 'scss/style.scss' // 'destination': 'source'
          } 
        }
      },
    // compass: {
    //   dev: {
    //     options: {
    //       importPath: 'bower_components/foundation/scss',
    //       sassDir: 'scss',
    //       cssDir: 'dist/css',
    //       generatedImagesDir: 'dist/images/generated',
    //       imagesDir: 'dist/images',
    //       javascriptsDir: 'dist/js',
    //       fontsDir: 'dist/fonts',
    //       httpImagesPath: '../images',
    //       httpGeneratedImagesPath: '/images/generated',
    //       httpFontsPath: '../fonts',
    //       relativeAssets: false,
    //       //assetCacheBuster: false,
    //       outputStyle: 'expanded'
    //     }
    //   }
    // },

    jade: {
      compile: {
        options: {
          pretty: true,
          client: false
        },
        files: {
        "dist/index.html": ["jade/*.jade"]
        }
      }
    }, //jade

    // useminPrepare: {
    //   options: {
    //     dest: 'dist'
    //   },
    //   html: 'dist/index.html'
    // },
    // usemin: {
    //   options: {
    //     assetsDirs: ['dist']
    //   },
    //   html: ['dist/{,*/}*.html'],
    //   css: ['dist/css/{,*/}*.css']
    // },
    // imagemin: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: 'images',
    //       src: '{,*/}*.{gif,jpeg,jpg,png}',
    //       dest: 'dist/images'
    //     }]
    //   }
    // },
    // svgmin: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       cwd: 'images',
    //       src: '{,*/}*.svg',
    //       dest: 'dist/images'
    //     }]
    //   }
    // },
    // cssmin: {
    //   // This task is pre-configured if you do not wish to use Usemin
    //   // blocks for your CSS. By default, the Usemin block from your
    //   // `index.html` will take care of minification, e.g.
    //   //
    //   //     <!-- build:css({.tmp,app}) styles/main.css -->
    //   //
    //   // dist: {
    //   //     files: {
    //   //         '/styles/main.css': [
    //   //             '.tmp/styles/{,*/}*.css',
    //   //             '/styles/{,*/}*.css'
    //   //         ]
    //   //     }
    //   // }
    // },
    // // htmlmin: {
    // //   dist: {
    // //     options: {
    // //       removeCommentsFromCDATA: true,
    // //       // https://github.com/yeoman/grunt-usemin/issues/44
    // //       //collapseWhitespace: true,
    // //       collapseBooleanAttributes: true,
    // //       removeAttributeQuotes: true,
    // //       removeRedundantAttributes: true,
    // //       useShortDoctype: true,
    // //       removeEmptyAttributes: true,
    // //       removeOptionalTags: true
    // //     },
    // //     files: [{
    // //       expand: true,
    // //       cwd: '<%= yeoman.app %>',
    // //       src: '*.html',
    // //       dest: '<%= yeoman.dist %>'
    // //     }]
    // //   }
    // // },

    copy: {
      dist: {
        files: [{
          expand: true,
          dest: 'dist',
          cwd: '',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'images/**/*',
            'js/{,*/}*.js', //js shoud be uglify
            'fonts/{,*/}*.*' 
          ]
        }]
      } //copy:dist
    } //copy
  });

    // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');


  // Tasks
  grunt.registerTask('build', ['copy:dist', 'jade:compile', 'sass:dist' ]);
  grunt.registerTask('default', ['build', 'watch']);
};