const ROOP_NO = 10000;

let acc = 1; // 누적 합을 저장
let current = 0; // 현재 n 값을 저장

function neverOverflowSummary(n) {
  try {
    if (n === 1) {
      console.log({'acc' : acc})
      return 1;
    }

    acc += n;
    current = n;

    return n + neverOverflowSummary(current - 1);
  } catch (e) {
    // Stack Overflow 발생
    console.log("error overflow 현재, 누적 합", current, acc);
    return n + neverOverflowSummary(current - 1);
  }
}

console.log(neverOverflowSummary(ROOP_NO));

// let acc = 0; // 누적 합을 저장

// const neverOverflowSummary = (number) => {
//   try {
//     if (number === 1) return 1;
//     acc += number;
//     return number + neverOverflowSummary(number - 1);
//   } catch (err) {
//     console.log(number);
//   }
// };

// console.log('🚀for sum:', sum);

// console.log({ acc });
