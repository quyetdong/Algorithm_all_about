/* eslint no-undef: 0 */
const testfn = require('../../FA_NODEJS1801/FunctionChallenge/12.limit');
// const { add, sub, mul } = require('../2.binaryFunction');

describe('test function limit that takes a binary function', () => {
  const bus = testfn(add, 2);

  it('test case 1 should return 9', () => {
    const a = 4;
    const b = 5;
    expect(bus(a, b)).toEqual(a + b);
  });

  it('test case 2 should return 15', () => {
    const a = 6;
    const b = 9;
    expect(bus(a, b)).toEqual(b + a);
  });

  it('test case 2 should return undefined', () => {
    const a = 6;
    const b = 9;
    expect(bus(a, b)).toEqual(undefined);
  });
});
