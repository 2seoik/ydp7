/**
 * function findSum(n) {
  if (n <= 1) return n;
  return n + findSum(n - 1);
}
console.log('🚀 find-sum:', findSum(10000));

만약 findSum 함수에 큰 수를 넣으면 CallStack이 Overflow 발생합니다.(RangeError: Maximum call stack size exceeded)

아래와 같이 큰 수를 입력하여 Stack Overflow가 발생하여도, 정상 결과가 나오도록 neverOverflowSum 함수를 작성하시오?

let sum = 0;
for (let i = 1; i <= 10000; i += 1) sum += i;
console.log('🚀  sum:', sum, neverOverflowSum(10000));

출력값 : 50005000 50005000

 */
