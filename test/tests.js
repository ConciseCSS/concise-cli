const fs = require("fs");
const test = require("tape");
const compile = require('../lib/compile');

const actual = (file) => {
  return compile(`test/fixtures/${file}/source.ccss`).replace(/\s+/g, '');
};

const expected = (file) => {
  return fs.readFileSync(`test/fixtures/${file}/expected.css`, 'utf8').replace(/\s+/g, '');
};

test('@media', (t) => {
  t.equal(
    actual('customMedia'),
    expected('customMedia'),
    'Custom media queries are transformed');

  t.equal(
    actual('mediaMinMax'),
    expected('mediaMinMax'),
    'Min/Max helpers in media queries are transformed');

  t.end();
});

test('units', (t) => {
  t.equal(
    actual('verticalRhythm'),
    expected('verticalRhythm'),
    'The lh unit is transformed to rem units');

  t.end();
});

test('variables', (t) => {
  t.equal(
    actual('advancedVariables'),
    expected('advancedVariables'),
    'Variables should be replaced with its values');

  t.end();
});

test('Property lockup', (t) => {
  t.equal(
    actual('property-lookup'),
    expected('property-lookup'),
    'Property references should be replaced');

  t.end();
});

test('Nested rule sets', (t) => {
  t.equal(
    actual('nested'),
    expected('nested'),
    'Expand nested rule sets');

  t.end();
});

test('Custom selectors', (t) => {
  t.equal(
    actual('custom-selectors'),
    expected('custom-selectors'),
    'Expand custom selectors');

  t.end();
});
