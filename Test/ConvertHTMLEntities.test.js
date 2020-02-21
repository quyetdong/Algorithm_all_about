/* eslint no-undef: 0 */
const convertHTML = require('../OldScripts/ConvertHTMLEntities');

describe('test function converhtml', () => {
  it('should return', () => {
    expect(convertHTML('Hamburgers < Pizza < Tacos')).toBe('Hamburgers &lt; Pizza &lt; Tacos');
  });
});

test('test 2', () => {
  expect(convertHTML('Hamburgers < Pizza < Tacos')).toBe('Hamburgers &lt; Pizza &lt; Tacos');
});

test('test 3', () => {
  expect(convertHTML('Sixty > twelve')).toEqual('Sixty &gt; twelve');
});
