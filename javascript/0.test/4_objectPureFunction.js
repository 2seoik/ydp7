const assert = require("assert")
/*
아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.
*/

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park]; // 오염되면 안됨!!

users.addUser = function (user) {
    return [...users, user]
}

users.removeUser = function (user) {
    return users.filter((obj) => obj.id != user.id)
}

users.changeUser = function (currentObj, changeObj) {
    return users.map((obj) => obj.id === currentObj.id ? changeObj : obj)
}

const fnNames = Object.keys(users).filter(isNaN);
fnNames.forEach((fname) => {
    Object.defineProperty(users, fname, { enumerable: false });
})

users.addUser(hong)
users.removeUser(lee)
users.changeUser(kim, choi)

assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);