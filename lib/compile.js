const sass = require('node-sass');
const postcss = require('postcss');
const customMedia = require('postcss-custom-media');
const mediaMinMax = require('postcss-media-minmax');

module.exports = (file) => {
  var compiledSass = sass.renderSync({
    file: file
  }).css;

  return postcss().use(customMedia()).use(mediaMinMax()).process(compiledSass).css;
};
