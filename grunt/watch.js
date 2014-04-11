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
        tasks: ['haml', 'htmlmin'],
        options: {
            spawn: false,
            livereload: true,
        }
    },
    css: {
        files: ['assets/sass/*.{sass,scss}', 'assets/sass/**/*.{sass,scss}'],
        tasks: ['concat', 'sass', 'autoprefixer'],
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
};
