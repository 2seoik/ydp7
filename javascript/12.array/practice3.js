const assert = require("assert");

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park];

users.addUser = (array) => {
  return [...users, array];
};

users.removeUser = (array) => {
  return users.filter((v) => v != array);
};

users.changeUser = (p1, p2) => {
  return users.map((v) => (v === p1 ? p2 : v));
};

// users 객체에 함수를 추가하여 사용하는경우, users 객체가 오염되어
// assert.deepStrictEqual(users, [kim, lee, park]) 통과 불가함.
// 어떻게 해야하는지 여쭤볼것...
// 아래 참조 ==>

const fnName = Object.keys(users).filter(isNaN);

fnName.map((x) => {
  Object.defineProperty(users, x, { enumerable: false })
})

assert.deepStrictEqual(users.addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);
assert.deepStrictEqual(users.removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);
assert.deepStrictEqual(users.changeUser(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);
