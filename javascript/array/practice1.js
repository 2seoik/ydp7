const assert = require("assert");

/**
 * 다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.
 * (단, 입력값은 다음 예시로 한정함)
 */

const push = (...args) => {
  const [array, ...params] = [...args];
  return array.concat(params);
};

// slice?
// 마지막 값 pop
const pop = (array, range) => (range ? array.slice(range) : +array.slice(-1));

//
const unshift = (...args) => {
  const [array, ...params] = [...args];
  return params.concat(array);
};

//
const shift = (array, range = 1) => [array.slice(0, range), array.slice(range)];

const arr = [1, 2, 3, 4];
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
assert.deepStrictEqual(shift(arr, 2), [
  [1, 2],
  [3, 4],
]); // 2개 shift
assert.deepStrictEqual(arr, [1, 2, 3, 4]);
