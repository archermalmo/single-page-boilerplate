module.exports = {
  sassdoc: {
    src: 'assets/sass/parts/_mixins',
    dest: 'sassdocs',
    options: {
      verbose: true,
      display: {
        access: ['public', 'private'],
        alias: false,
        watermark: true
      },
      package: 'package.json'
    },
  },
};
