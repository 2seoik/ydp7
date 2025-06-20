/**
 * 1 큰 수가 무리수가 아닐 때 까지 sqrt 값을 출력하는 printIrr함수를 작성하시오. 
 */
function printIrr(x){
    let value = x; 

    do {        
      console.log(value, Math.sqrt(value).toFixed(3));
      value += 1;
    } while (!Number.isInteger(Math.sqrt(value)))
}
// printIrr(5);
// printIrr(9);

// =============================================================================
 


// Destructuring ===============================================================

/**
 * 다음 arr의 첫 번째 원소와 두 번째 원소를 swap 해보세요.
 */
function swapArray(){
  const arr = [1, 2];
  const [a, b] = arr;
  [a, b] = [b, a]; 

  console.log("🚀 ~ swapArray ~ arr:", arr)  
}
// swapArray();

// =============================================================================

/**
 * const user = { id: 1, name: 'Hong', addr: { city: 'Seoul' } };
 * 이 user 객체를 받아서 id와 name을 출력하는 함수를 2가지 방식으로 작성하시오.
 */
const fnc = {
  f1({id, name}) {
    console.log(id, name);
  },
  f2(user) {
    const {id, name} = user;
    console.log(id, name);
  },  
}

const hong = {id: 1, name: 'Hong'};
const lee = {id: 2, name: 'Lee'};

// fnc.f1(hong)
// fnc.f2(hong);

// fnc.f1(lee);
// fnc.f2(lee);

// =============================================================================

/**
 * 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.
 */
function removeProperty (){
  const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}

  const {passwd, ...userInfo} = user;

  console.log(userInfo)
}

// removeProperty()

// =============================================================================

/**
 * 다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오. 
 */
function arrDestructuring(){
  const arr = [[{id: 1}], [{id:2}, {id: 3}]];
  const [{id:id1}, {id:id2}, {id:id3}] = [...arr[0], ...arr[1]];
  // const [[{id:id1}], [{id:id2}, {id:id3}]] = arr;

  console.log("🚀 ~ id:", id1, id2, id3)
}

// arrDestructuring()

// =============================================================================

/**
 * 다음과 같이 key를 전달하면 해당 값의 첫 글자를 제외한 문자를 
 * 리턴하는 함수를 destructing을 최대한 활용하여 (가),(나),(다) 부분을 작성하시오.
 */
function getValueExceptInitial(key){
  const user = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};
  
  const {[key]: val} = user;
  const [, ...words] = val;
  
  return words.join('')
}

// console.log(getValueExceptInitial('name'));   // 'ong'
// console.log(getValueExceptInitial('passwd')); // 'yz'
// console.log(getValueExceptInitial('addr'));   // 'eoul'
// =============================================================================



// closure =====================================================================
/**
 * 1 ~ n까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수로 작성하시오.
 * (단, array 메소드를 사용하지 말고, destructuring을 사용하시오)
 * @param {*} value 
 * @returns 
 */
function makeArray(value){
  if(value === 0) return [];
  return [...makeArray(value - 1), value]
}

// console.log(makeArray(10));

function makeReverseArray(value){
  if(value === 0) return [];
  return [value, ...makeArray(value - 1)]
}

// console.log(makeReverseArray(5));



// =============================================================================

/**
 * 피보나치 수열을 
 * 1) Loop를 이용하여 작성하시오.
 * 2) 순수 재귀를 이용하여 작성하시오.
 * 3) memoization하여 작성하시오.
 * @param {*} value 
 * @returns 
 */
function loopFibonacci(value) {
  if(value <= 2) return 1;

  let prev = 1;
  let current = 1;

  for (let index = 3; index <= value; index++) {
    let next = prev + current;

    prev = current;
    current = next;
    // [prev, current] = [current, next]
  }

  return current
}

// 재귀
function recurFibonacci(value) {
  if(value <= 2) return 1;
  return recurFibonacci(value - 2) + recurFibonacci(value - 1);
}

// memoization
const memoFibonacci = memoized(function (value) {
  if(value <= 2) return 1;
  return recurFibonacci(value - 2) + recurFibonacci(value - 1);
});

function memoized(fnc){
  const cache = {};
  return (key) => cache[key] || (cache[key] = fnc(key));  
}

// console.log(loopFibonacci(5))
// console.log(recurFibonacci(5))
// console.log(memoFibonacci(5))
// =============================================================================


// Object & Property ===========================================================