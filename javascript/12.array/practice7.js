const assert = require("assert");

// * rules - f(s, e, step)
//  - step 기본값 = s > e ? -1 : 1
//  - step === 0 || s === e ? [s]

//  - e 가 없다면,
//   ⇒ s > 0 ? e = s, s = 1
//   ⇒ s < 0 ? e = -1
//   ⇒ s === 0 ? [0]

// - 비정상(예외)
//   ⇒ s > e && step > 0 ? []
//   ⇒ s < e && setp < 0 ? []
//   즉, (s - e) * step > 0

const range = (s, e, step) => {
  const start = s;
  const end = e;
  step = step ?? (s > e ? -1 : 1);

  // 예외
  if ((start - end) * step > 0) return [];

  // console.log("🚀 ~ range ~ start:", start);
  // console.log("🚀 ~ range ~ end:", end);
  // console.log("🚀 ~ range ~ step:", step);

  const condition = (index) =>
    step !== 0 && start !== end && (start > end ? index >= end : index <= end);

  let result = [start];
  for (let i = start + step; condition(i); i += step) {
    result.push(i);
  }

  return result;
};

// assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
// assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

// assert.deepStrictEqual(range(5, 5, 0), [5]);
// assert.deepStrictEqual(range(1, 5, 0), [1]);
// assert.deepStrictEqual(range(5, 5, -1), [5]);
// assert.deepStrictEqual(range(5, 5), [5]);
// assert.deepStrictEqual(range(0, 0, 5), [0]);
// assert.deepStrictEqual(range(1, 5, -1), []);

// assert.deepStrictEqual(range(1, 5, 6), [1]);
// assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
// assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

// assert.deepStrictEqual(range(5, 1, 1), []);
// assert.deepStrictEqual(range(0, -1), [0, -1]);
// assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
// assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
// assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

// assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
// assert.deepStrictEqual(range(0), [0]);
// assert.deepStrictEqual(range(0, 0), [0]);
// assert.deepStrictEqual(range(2, 1, -5), [2]);
// assert.deepStrictEqual(range(0, -1, -5), [0]);
// assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
// assert.deepStrictEqual(range(50), Array.from({length: 50}, (_, i) => i + 1));
// assert.deepStrictEqual(range(1, 150, 3),Array.from({ length: 50 }, (_, i) => i * 3 + 1));
