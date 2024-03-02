const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  // 1st test case
  test('shuffle returns an array', () => {
    expect(typeof shuffle([1, 2, 3])).toBe('array')
  }),

  // 2nd test case
  test('shuffle returns an array with the same length of an array sent in as an argument', () => {
    expect(shuffle([1, 2, 3]).length).toBe(3)
  })
});
