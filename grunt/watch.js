module.exports = {
    main: {
        files: ['Gruntfile.js', 'grunt/*.js'],
        tasks: ['grunt'],
        options: {
            spawn: true,
            livereload: true
        }
    },
    haml: {
        files: ['assets/*.haml', 'assets/**/*.haml'],
        tasks: ['haml', 'modernizr', 'htmlmin'],
        options: {
            spawn: false,
            livereload: true,
        }
    },
    css: {
        files: ['assets/sass/*.{sass,scss}', 'assets/sass/**/*.{sass,scss}'],
        tasks: ['sass', 'autoprefixer'],
        options: {
            spawn: false,
            livereload: true,
        }
    },
    scripts: {
        files: ['assets/js/*.js'],
        tasks: ['modernizr', 'concat', 'uglify'],
        options: {
            spawn: false,
            livereload: true,
        }
    },
};
