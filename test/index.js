const fs = require("fs");
const test = require("tape");
const compile = require('../lib/compile');

const actual = (file) => {
  return compile(`test/fixtures/${file}/${file}.scss`).trim();
};

const expected = (file) => {
  return fs.readFileSync(`test/fixtures/${file}/${file}.css`, 'utf8').trim();
};

test('@media', (t) => {

  t.equal(
    actual('mediaMinMax'),
    expected('mediaMinMax'),
    'should transform ranges in media queries');

  t.end();
})
