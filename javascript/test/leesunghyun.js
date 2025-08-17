const assert = require("assert");

/*
    피보나치 수열을 memoization하여 작성하시오.
    (memoized 함수는 별개 함수로 직접 작성하시오)
*/
function ex1() {
    const memoiezed = (fn) => {
        const cache = {};
        return (key) => cache[key] || (cache[key] = fn(key));
    }

    const memoFibonacci = memoiezed((n) => {
        if (n <= 1) return n;
        return memoFibonacci(n - 2) + memoFibonacci(n - 1);
    });

    assert.equal(memoFibonacci(5), 5);
    assert.equal(memoFibonacci(7), 13);
}

/*
    2-1) 다음과 같은 push, pop 을 순수 함수로 작성하시오.
    2-2) 다음과 같은 shift, unshift 를 순수 함수로 작성하시오.
    (단, 입력값은 다음 예시로 한정함)
*/
function ex2() {
    const arr = [1, 2, 3, 4];

    const push = (arr, ...args) => {
        return [...arr, ...args];
    }

    const pop = (arr, cnt = 1) => {
        return cnt === 1 ? arr.at(-1) : arr.slice(cnt);
    }

    const unshift = (arr, ...args) => {
        return [...args, ...arr];
    }

    const shift = (arr, cnt = 1) => {
        return [arr.slice(0, cnt), arr.slice(cnt)]
    }

    assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
    assert.deepStrictEqual(pop(arr), 4);
    assert.deepStrictEqual(pop(arr, 2), [3, 4]);    // 2개 팝!
    assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
    assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
    assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
    assert.deepStrictEqual(shift(arr, 2), [[1, 2], [3, 4]]); // 2개 shift
    assert.deepStrictEqual(arr, [1, 2, 3, 4]);
}

/*
    Array.reduce 함수를 고차 함수로 직접 구현하시오.
*/
function ex3() {
    const reduce = (arr, fn, initValue) => {
        let i = 0;
        let acc = initValue ?? arr[i++];

        for (; i < arr.length; i++) {
            acc = fn(acc, arr[i]);
        }
        return acc;
    }
    const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const kim = { id: 2, name: 'kim' };
    const lee = { id: 3, name: 'Lee' };
    const park = { id: 4, name: 'Park' };
    const users = [kim, lee, park];

    assert.deepStrictEqual(
        reduce(a10, (acc, cur) => acc + cur, 0),
        a10.reduce((acc, cur) => acc + cur, 0)
    );

    assert.deepStrictEqual(
        reduce(users, (acc, user) => acc + user.name),
        users.reduce((acc, user) => acc + user.name)
    );

    assert.deepStrictEqual(
        reduce(a10, (acc, cur) => acc + cur, 0),
        a10.reduce((acc, cur) => acc + cur, 0)
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

}

/*
    다음의 지하철 노선 중에서, 출발역 ~ 도착역까지만을 반환하는 클래스를 작성하시오. (단방향만!)
*/
function ex4() {

    const LINE2 = [
        '신도림',
        '성수',
        '신설동',
        '용두',
        '신답',
        '용답',
        '시청',
        '충정로',
        '아현',
        '이대',
        '신촌',
        '공항철도',
        '홍대입구',
        '합정',
        '당산',
        '영등포구청',
        '문래',
        '대림',
        '구로디지털단지',
        '신대방',
        '신림',
        '봉천',
        '서울대입구',
        '낙성대',
        '사당',
        '방배',
        '서초',
        '교대',
        '강남',
        '역삼',
        '선릉',
        '삼성',
        '종합운동장',
        '신천',
        '잠실',
        '잠실나루',
        '강변',
        '구의',
        '건대입구',
        '뚝섬',
        '한양대',
        '왕십리',
        '상왕십리',
        '신당',
        '동대문역사문화공원',
        '을지로4가',
        '을지로3가',
        '을지로입구'
    ]

    class Subway {
        #startStation;
        #endStation;
        #currIdx;
        #isEnd
        constructor(start, end) {
            this.#startStation = start;
            this.#endStation = end;
            this.#currIdx = LINE2.indexOf(this.#startStation);
        }

        nextStation() {
            if (this.#currIdx === LINE2.length) this.#currIdx = 0;
            this.#isEnd = this.#currIdx === LINE2.indexOf(this.#endStation);
            return LINE2[this.#currIdx++];
        }

        *[Symbol.iterator]() {
            while (true) {
                if (this.#isEnd) {
                    this.#isEnd = false;
                    this.#currIdx = LINE2.indexOf(this.#startStation);
                    break;
                }
                yield this.nextStation();
            }
        }

        toString() {
            return `${this.#startStation} ~ ${this.#endStation} --> 현재 역 : ${LINE2[this.#currIdx - 1]}`
        }
    }

    const routes = new Subway('문래', '신림');
    console.log([...routes]);
    assert.deepStrictEqual(
        [...routes],
        ['문래', '대림', '구로디지털단지', '신대방', '신림']
    );

    const it1 = routes[Symbol.iterator]();
    ['문래', '대림', '구로디지털단지', '신대방', '신림'].forEach((value, i) => {
        assert.deepStrictEqual(it1.next(), { value, done: false });
        console.log(i, routes.toString());
    });
    // console.log(it1.next());
    assert.deepStrictEqual(it1.next(), { value: undefined, done: true });

    const route3 = new Subway('문래', '합정'); // 46개 정거장이면 통과!
    assert.strictEqual([...route3].length, 46);
    const route4 = new Subway('신도림', '을지로입구'); // 48개 정거장이면 통과!
    assert.strictEqual([...route4].length, 48);
}

/*
    5-1) 문자열 str에서 대문자는 소문자로 소문자는 대문자로 변환하세요.
*/
function ex5_1() {
    const swapCase = (str) => {
        return str.replace(
            /([A-Z]*)([a-z]*)/g,
            (_, upp, low) => `${upp.toLowerCase()}${low.toUpperCase()}`
        );
    }

    assert.strictEqual(swapCase('Senior Coding Learning JS'), 'sENIOR cODING lEARNING js');
}

/*
    5-2) 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
 */
function ex5_2() {

    const telfmt = (telNo) => {
        const telLength = telNo?.length ?? 0;

        if (telLength <= 6) return;
        if (telLength === 8 || telLength === 7) {
            const n = telLength - 4;
            return `${telNo.substring(0, n)}-${telNo.substring(n)}`
        }

        const isSeoul = telNo.startsWith('02');
        const a = isSeoul ? 2 : telLength > 10 ? telLength - 8 : 3;
        const b = telLength - a - 4;

        const reg = new RegExp(`(\\d{${a}})(\\d{${b}})(\\d{4})`);
        return telNo.replace(reg, '$1-$2-$3');
    }

    assert.deepStrictEqual(telfmt('4782970'), '478-2970');              // 7
    assert.deepStrictEqual(telfmt('15771577'), '1577-1577');            // 8  
    assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');       // 10 
    assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');     // 11
    assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');       // 10 서울
    assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');         // 9  서울
    assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');       // 10
    assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');     // 11
    assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');   // 12
}

/*
    문자열이 한글 자음으로 끝나는지 체크하는 함수를 작성하시오.
*/
function ex6() {
    const ALPHA_NUMERIC = [...'LMNRlmnr013678'].map(a => a.charCodeAt(0));
    const ㄱ = 'ㄱ'.charCodeAt();
    const ㅎ = 'ㅎ'.charCodeAt();
    const 가 = '가'.charCodeAt();
    const 힣 = '힣'.charCodeAt();

    const isEndJaum = (str) => {
        const e = str.charCodeAt(str.length - 1);
        if (ALPHA_NUMERIC.includes(e)) return true;
        if (e >= ㄱ && e <= ㅎ) return true;
        if (e >= 가 && e <= 힣 && (e - 가) % 28 !== 0) return true;
        return false;
    }

    assert.equal(isEndJaum('아지오'), false);
    assert.equal(isEndJaum('북한강'), true);
    assert.equal(isEndJaum('뷁'), true);
    assert.equal(isEndJaum('강원도'), false);
    assert.equal(isEndJaum('바라당'), true);
    assert.equal(isEndJaum('ㅜㅜ'), false);
    assert.equal(isEndJaum('케잌'), true);
    assert.equal(isEndJaum('점수 A'), false);
    assert.equal(isEndJaum('알파벳L'), true);
    assert.equal(isEndJaum('24'), false);
    assert.equal(isEndJaum('23'), true);
}

ex1();
ex2();
ex3();
ex4();
ex5_1();
ex5_2();
ex6();