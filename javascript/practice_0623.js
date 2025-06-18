/**
 * 1 큰 수가 무리수가 아닐 때 까지 sqrt 값을 출력하는 printIrr함수를 작성하시오. 
 */
function printIrr(x){
    let value = x; 
    do {        
      console.log(value, +Math.sqrt(value).toFixed(3));
      value += 1;
    } while (!Number.isInteger(Math.sqrt(value)))
}
// printIrr(5);
// printIrr(9);

// =============================================================================
 


/**
 * 다음 arr의 첫 번째 원소와 두 번째 원소를 swap 해보세요.
 */
function swapArray(){
  const arr = [1, 2];
  let [a, b] = arr;
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
  f1 : ({id, name}) => {
    console.log(id, name);
  },
  f2 : (user) => {
    const {id, name} = user;
    console.log(id, name);
  },  
}

const hong = {id: 1, name: 'Hong'};
const lee = {id: 2, name: 'Lee'};

fnc.f1(hong)
fnc.f2(hong);

fnc.f1(lee);
fnc.f2(lee);

// =============================================================================



/**
 * 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.
 */
const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}
function removeProperty (){
  const {passwd, ...userInfo} = user;
  console.log(userInfo)
}

removeProperty()

// =============================================================================