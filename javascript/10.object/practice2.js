/**
 * data = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오. (makeObjectFromArray)
=> { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)

dataObj = { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

=> [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]


 */

assert.deepStrictEqual(makeObjectFromArray(data), {
  A: [10, 20],
  B: [30, 40],
  C: [50, 60, 70],
});

const x2 = makeArrayFromObject({ A: [10, 20], B: [30, 40], C: [50, 60, 70] });
assert.deepStrictEqual(x2, data);
console.log("🚀 x2:", x2);
