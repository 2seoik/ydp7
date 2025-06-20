const dog = {
  name: 'Maxx',
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(() => this.showMyName(), 1000);
  }
};

dog.whatsYourName();

Array.prototype.map

return 

// const array = [100, 200, 300, 400, 500, 600, 700];

// for(aa in array) {
//   console.log(aa)
// }

// for(aa of array) {
//   console.log(aa)
// }



// const obj = { name: 'Kim', addr: 'Yongsan', level: 1, role: 9, receive: false };
// // 열거 되지 않음
// Object.defineProperty(obj, 'level', { enumerable:false});

// Object.defineProperty(obj, 'role', { writable: enumerable:false});
// for(aa in obj){
//   console.log(obj[aa])
// }



















return 


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

function recurFibonacci(value) {
  if(value <= 2) return 1;
  return recurFibonacci(value - 2) + recurFibonacci(value - 1);
}

const memoFibonacci = memoized(function (value) {
  if(value <= 2) return 1;
  return recurFibonacci(value - 2) + recurFibonacci(value - 1);
});

function memoized(fnc){
  const cache = {};
  return (key) => cache[key] || (cache[key] = fnc(key));  
}

console.log(loopFibonacci(5))
console.log(recurFibonacci(5))
console.log(memoFibonacci(5))

return 



function swapArray(){
  const arr = [1, 2];
  let [a, b] = arr;
  [a, b] = [b, a]; 

  console.log("🚀 ~ swapArray ~ arr:", arr)  
}
swapArray();


return 
const arr = [1, 2, 3, 4, 5];
const [a1, a2, ...rest] = arr; 
console.log("🚀 ~ a1, a2, ...rest:", a1, a2, rest)

return 


/**
 * 다음과 같이 key를 전달하면 해당 값의 첫 글자를 제외한 문자를 
 * 리턴하는 함수를 destructing을 최대한 활용하여 (가),(나),(다) 부분을 작성하시오.
 */
function getValueExceptInitial(key){
  const user = {name: 'Hong', passwd: 'xyz', addr: 'Seoul'};
  
  const {[key]:target} = user;
  const [, ...words] = target;
  
  return words.join('')
}


console.log(getValueExceptInitial('name'));   // 'ong'
console.log(getValueExceptInitial('passwd')); // 'yz'
console.log(getValueExceptInitial('addr'));   // 'eoul'
