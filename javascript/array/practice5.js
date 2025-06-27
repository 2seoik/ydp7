const assert = require("assert");

const reduce = (arr, fn, initValue) => {
  // for (const value of arr) {
  //   sum = fn(sum, value);
  // }
  const isNumber = typeof arr[0] === "number";
  let index = isNumber ? 0 : 1;
  let acc = isNumber ? initValue ?? 0 : {};

  for (index; index < arr.length; index++) {
    acc = fn(acc, arr[index]);
  }

  return acc;
};

const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park];

const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur, 0),
  a10.reduce((acc, cur) => acc + cur, 0)
);

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  users.reduce((acc, user) => acc + user.name)
);

assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  [1, 2, 3, 4, 5].reduce((a, b) => a * b, 1)
);

assert.deepStrictEqual(
  reduce(a10, (acc, cur) => acc + cur),
  a10.reduce((acc, cur) => acc + cur)
);
