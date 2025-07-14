const assert = require("assert")
/*
Array.prototype.reduce 함수를 직접 구현하시오.
*/

const reduce = (arr, fn, initValue) => {
    let i = 0;
    let acc = initValue ?? arr[i++];

    for (; i < arr.length; i++) {
        acc = fn(acc, arr[i], i, arr);
    }
    return acc;
};

const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
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
    reduce(a10, (acc, cur) => acc + cur),
    a10.reduce((acc, cur) => acc + cur)
);
assert.deepStrictEqual(
    reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
    [1, 2, 3, 4, 5].reduce((a, b) => a * b, 1)
);

assert.deepStrictEqual(
    reduce(users, (acc, user) => acc + user.name),
    users.reduce((acc, user) => acc + user.name)
);


console.log(reduce([1, 2, 3], (a, b) => a + b, 0));       // 6이면 통과!
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));    // 15면 통과!
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1)); // 120이면 통과!
console.log(reduce([2, 2, 2], (a, b) => a * b));          // 8이면 통과!
console.log(reduce([3, 3, 3], (a, b) => a * b, 0));       // 0이면 통과!
console.log(reduce(users, (acc, user) => acc + user.name));  // [object Object]LeePark
