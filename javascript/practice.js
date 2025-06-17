 toFixed() 메서드를 사용하여 1의 소수점 자리에서 반올림하여 문자열로 반환하여 처리함.
 */
function practice1() {
  for (let i = 0.1; i < 1; i += 0.1) {
    console.log(+i.toFixed(1));
  }
  return;
}

/**
 * 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.
 * @returns Math.sqrt() 사용, 무리수만 출력!
 */
function practice2() {
  for (let i = 1; i <= 10; i++) {
    // 제곱근
    const sqrt = Math.sqrt(i);

    // 정수가 아닌경우
    if (!Number.isInteger(sqrt)) {
      console.log(i, sqrt.toFixed(3));
    }
  }
  return;
}

/**
 * 오늘 날짜의 요일을 출력 (switch)
 * 0123456
 * 일월화수목금토
 */
function practice3() {
  const today = new Date();
  const day = today.getDay();
  let result = "";

  switch (day) {
    case 0:
      result = "일";
      break;
    case 1:
      result = "월";
      break;
    case 2:
      result = "화";
      break;
    case 3:
      result = "수";
      break;
    case 4:
      result = "목";
      break;
    case 5:
      result = "금";
      break;
    case 6:
      result = "토";
      break;
    default:
      break;
  }

  console.log(`오늘은 ${result}요일입니다.`);

  return;
}

/**
 * 오늘 날짜의 요일을 출력 (switch 사용X)
 */
function practice3_2() {
  const WEEK_NAMES = "일월화수목금토";
  const day = new Date().getDay();
  const result = WEEK_NAMES[day];

  console.log(`오늘은 ${result}요일입니다.`);

  return;
}

/**
 * 올바른 더하기 연산을 하는 addPoints 함수
 * (단, 소숫점 자리수는 긴쪽에 맞춘다)
 * @param {*} a
 * @param {*} b
 */
function practice4_addPoints(a, b) {
    // 실수부의 길이
    // let max = Math.max((a.toString().split(".")[1] || "").length, (b.toString().split(".")[1] || "").length);
    console.log(+(a+b).toFixed(5))
    return;
}

practice4_addPoints(0.21354, 0.1)   // 0.31354
practice4_addPoints(0.14, 0.28)     // 0.42
practice4_addPoints(0.34, 0.226)    // 0.566
practice4_addPoints(10.34, 200.226) // 210.566
practice4_addPoints(0.143, -10.28)  // -10.137
practice4_addPoints(0.143, -10)  // -9.857


/**
 * 다음 소수 배열의 평균을 소수점 2자리까지 구해보세요.
 * (단, toFixed를 사용하지 말고, 정상적인 숫자가 아닌 경우는 평균에서 제외하세요!)
 */
function practice5(){
    // const prices = [10.34, 19, 'xxx', 5.678, null, '20.9', 1.005, 0, undefined, 0.5];
    const prices = [10.34232323, 15, 'xxx', 5.67899, null, 20.9, 1.005121, 0, 15.234, undefined, 0.5];

    // 정상적인 숫자찾기
    const checkPrices = prices.filter(price => {
        return price !== null && isFinite(price);
    })

    // 평균을 위한 더하기
    const sumPrices = checkPrices.reduce((acc, p) => acc + (+p), 0);

    // 평균값
    const avgPrices = (sumPrices / checkPrices.length);

    console.log("🚀 ~ practice7 ~ avgPrices:", Math.trunc(avgPrices * 100) / 100)

    return;
}


