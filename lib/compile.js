const sass = require('node-sass');
const postcss = require('postcss');

module.exports = (file) => {
  var compiledSass = sass.renderSync({
    file: file
  }).css;

  return postcss([
    require('postcss-input-range'),
    require('postcss-lh'),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('autoprefixer')
  ]).process(compiledSass).css;
};
