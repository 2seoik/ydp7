const assert = require('assert')


// 다음과 같은 deleteArray를 순수 함수로 작성하시오.
const deleteArray = (...args) => {
    const [a, ...b] = [...args];

    const del = a.slice(b, Infinity);
    const [z, ...del] = a
    console.log(n)
    // console.log("🚀 ~ deleteArray ~ a:", a)
    // console.log("🚀 ~ deleteArray ~ b:", b)

}

const arr3 = [1, 2, 3, 4];
assert.deepStrictEqual(deleteArray(arr3, 2), [1, 2]);    // 2번 인덱스 부터 끝까지 지우고 나머지 리턴
// assert.deepStrictEqual(deleteArray(arr3, 1, 3), [1, 4]); // 1번 인덱스 부터 3번 인덱스 앞까지 지우고 나머지 리턴
assert.deepStrictEqual(arr3, [1, 2, 3, 4]); // 순수함수 체크

// const Hong = { id: 1, name: 'Hong' };
// const Kim = { id: 2, name: 'Kim' };
// const Lee = { id: 3, name: 'Lee' };
// const users = [Hong, Kim, Lee];

// assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
// assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
// assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
// assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim]);