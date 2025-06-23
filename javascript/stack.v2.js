const ROOP_NO = 100000;

function neverOverflowSummary() {
  let current = 0; // 현재 n 값을 저장
  let acc = 0; // 누적 합을 저장

  return function summary(n) {
    try {
      if (current === 1) {
        // console.log("acc", acc);
        return acc;
      }

      current = n;
      acc += current;

      return current + summary(current - 1);
    } catch (e) {
      // console.log(`${e.message} ===============>  n:${n}, current:${current}`);
      return current + summary(current - 1);
    }
  };
}

const over = neverOverflowSummary();
console.log(over(ROOP_NO));

// console.log(neverOverflowSummary(ROOP_NO));
