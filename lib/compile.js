const postcss = require('postcss');
const fs = require('fs');
const syntax = require('postcss-scss');

module.exports = (file) => {
  var source = fs.readFileSync(file, 'utf8');

  return postcss([
    require('postcss-strip-inline-comments'),
    require('postcss-property-lookup'),
    require('postcss-lh'),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-advanced-variables'),
    require('postcss-nested'),
    require('autoprefixer')
  ]).process(source, { parser: syntax }).css;
};
