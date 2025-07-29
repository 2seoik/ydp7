const assert = require("assert")
/*
모든 Array가 다음 기능을 갖도록 구현하세요.
1) mapBy(), findBy(), filterBy(), rejectBy(), sortBy()
2) firstObject, lastObject
*/

Object.defineProperties(Array.prototype, {
    firstObject: {
        get() {
            return this[0];
        }
    },
    lastObject: {
        get() {
            return this.at(-1);
        }
    }
})

Array.prototype.mapBy = (prop) => users.map(arr => arr[prop]);

Array.prototype.filterBy = function (prop, value, includes = false) {
    const cb = includes ? "" :
        (a => a[prop] === value);
    return this.filter(cb)
}

Array.prototype.rejectBy = function (prop, value, includes = false) {
    const cb = (a => a[prop] !== value);
    return this.filter(cb)
}

Array.prototype.findBy = (prop, value) => users.find(a => a[prop] === value);

const arr = [1, 2, 3, 4, 5];
const hong = { id: 1, name: 'Hing' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const users = [hong, lee, kim];

const ar = users.rejectBy('id', 2)


// assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
// assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]);
// assert.deepStrictEqual(users.mapBy('name'), ['Hing', 'Lee', 'Kim']);

// assert.deepStrictEqual(users.filterBy('id', 2), [kim]);
// assert.deepStrictEqual(users.filterBy('name', 'i', true), [hong, kim]); // key, value일부, isInclude
// assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]);
// assert.deepStrictEqual(users.rejectBy('name', 'i', true), [lee]);

// assert.deepStrictEqual(users.findBy('name', 'Kim'), kim);
// assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong]);
// assert.deepStrictEqual(users.sortBy('name'), [hong, kim, lee]);
// assert.deepStrictEqual(users.firstObject, hong);
// assert.deepStrictEqual(users.lastObject, lee);
// users.firstObject = kim;
// assert.deepStrictEqual(users.firstObject, kim);
// users.lastObject = hong;
// assert.deepStrictEqual(users.lastObject, hong);
