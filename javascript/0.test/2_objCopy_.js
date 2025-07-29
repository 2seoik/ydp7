const assert = require("assert")

/*
*** Object & Property 문제 ***
원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를  사용하지 말고 작성하시오.

// 1) shallow copy
const kim = {nid: 3, nm: 'Kim', addr: 'Pusan'};
const newKim1 = shallowCopy(kim);
newKim1.addr = 'Daegu';
console.log(kim.addr !== newKim1.addr); // true면 통과!
// 2) 이하 deep copy
const kim2 = {nid: 3, nm: 'Kim', addr: {city: 'Pusan', road: 'Haeundaero', zip: null }};
const newKim2 = deepCopy(kim2); 
newKim2.addr.city = 'Daegu';
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!
*/

const shallowCopy = (obj) => {
    const ret = {};
    for (const [k, v] of Object.entries(obj)) {
        ret[k] = v;
    }
    return ret;
}


const deepCopy = (obj) => {
    const ret = {};
    for (const [k, v] of Object.entries(obj)) {
        if (v !== null && typeof v === 'object') {
            ret[k] = deepCopy(v);
        } else {
            ret[k] = v;
        }
    }
    return ret;
}

const kim = { nid: 3, nm: 'Kim', addr: 'Pusan' };
const newKim1 = shallowCopy(kim);
newKim1.addr = 'Daegu';
console.log(kim.addr !== newKim1.addr);


const kim2 = { nid: 3, nm: 'Kim', addr: { city: 'Pusan', road: 'Haeundaero', zip: null } };
const newKim2 = deepCopy(kim2);
newKim2.addr.city = 'Daegu';
console.log(kim2.addr.city !== newKim2.addr.city);
console.log('🚀 ~ kim2.addr.city:', kim2.addr, newKim2.addr);