const assert = require("assert")
/*
피보나치 수열을 
1) Loop를 이용하여 작성하시오.
2) 순수 재귀를 이용하여 작성하시오.
3) memoization하여 작성하시오.

수열의 규칙은 f(n) = f(n - 2) + f(n - 1)  (단, n <= 1 일 때 f(n) = n)
즉, 0 ~ 9까지의 값은 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.
loopFibonacci(5); // 5
recurFibonacci(7); // 13
memoFibonacci(30); // 832040
*/


assert.equal(loopFibonacci(5), 5);
assert.equal(loopFibonacci(7), 13);
assert.equal(loopFibonacci(30), 832040);

assert.equal(recurFibonacci(5), 5);
assert.equal(recurFibonacci(7), 13);
assert.equal(recurFibonacci(30), 832040);
return

assert.equal(memoFibonacci(5), 5);
assert.equal(memoFibonacci(7), 13);
assert.equal(memoFibonacci(30), 832040);