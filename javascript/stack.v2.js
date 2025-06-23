const ROOP_NO = 10000;

function neverOverflowSummary() {
  let current = 0; // 현재 n 값을 저장
  let acc = 0; // 누적 합을 저장

  return function summary(n) {
    try {
      if (current === 1) {
        console.log("acc", acc);
        return 1;
      }

      current = n;
      acc += current;

      return current + summary(current - 1);
    } catch (e) {
      // console.log(`${e.message} ===============> c:${current}`);
      return current + summary(current - 1);
    }
  };
}

const over = neverOverflowSummary();
over(ROOP_NO)
