module.exports = {
    options: {
        browsers: ['last 10 version']
    },
    multiple_files: {
        expand: true,
        flatten: true,
        src: 'public/css/global.css',
        dest: 'public/css/'
    },
};
