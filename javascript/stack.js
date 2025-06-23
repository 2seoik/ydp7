const ROOP_NO = 100000;

function neverOverflowSummary(n) {
  let acc = 0; // 누적 합을 저장
  let current = 0; // 현재 n 값을 저장

  function summary(n) {
    try {
      if (n === 0) {
        console.log(acc)
        return 1;
      }

      acc += n;
      current = n;

      return current + summary(current - 1);
    } catch (e) {
      // Stack Overflow 발생
      // console.log(e);
      // console.log("error overflow 현재, 누적 합", current, acc);
      return current + summary(current - 1);
    }
  }

  return summary(n); // { total: acc, current };
}

console.log(neverOverflowSummary(ROOP_NO));
