// //// Check truthy predicate on all elements of collection //////////////
/* eslint no-undef: 0 */

const everythingBeTrue = require('../OldScripts/EverythingBeTrue');
const booWho = require('../NewScripts/9_BooWho');
const uniteUnique = require('../NewScripts/10_SortedUnion');

// ////////////////////////////////////////////
test('test everything be true 1', () => {
  expect(everythingBeTrue(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy', sex: 'male' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' },
    ],
    'sex',
  )).toBe(true);
});

test('test everything be true 2', () => {
  expect(everythingBeTrue(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy' },
      { user: 'Laa-Laa', sex: 'female' },
      { user: 'Po', sex: 'female' },
    ],
    'sex',
  )).toBe(false);
});

test('test everything be true 3', () => {
  expect(everythingBeTrue([{ single: 'double' }, { single: NaN }], 'single')).toBe(false);
});

// //////////////////////////////////////
test('check boolean primitive 1', () => {
  expect(booWho(true)).toBe(true);
});

test('check boolean primitive 2', () => {
  expect(booWho(false)).toBe(true);
});

test('check boolean primitive 3', () => {
  expect(booWho('true')).toBe(false);
});

test('check boolean primitive 4', () => {
  expect(booWho([].slice)).toBe(false);
});

test('check boolean primitive 5', () => {
  expect(booWho(1)).toBe(false);
});

test('check boolean primitive 5', () => {
  expect(booWho({ a: 1 })).toBe(false);
});

// /////////////////////////////
test('find unique elements 1', () => {
  expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
});

test('find unique elements 2', () => {
  expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual([
    1,
    3,
    2,
    [5],
    [4],
  ]);
});

test('find unique elements 3', () => {
  expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
});

test('find unique elements 4', () => {
  expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([
    1,
    2,
    3,
    5,
    4,
    6,
    7,
    8,
  ]);
});
