## ??

const result = "" ?? "default"; // result는 ""

- 왼쪽 피연산자가 `null` 이나 `undefined` 일 경우에만 오른쪽 피연산자를 평가하고 반환한다

- 따라서 `0`, `false`, `""` 같은 값들은 `||` 연산자와 다르게 여기서 유효한 값으로 취급된다

---

## ||

const result = "" || "default"; // result는 "default"

- 왼쪽 피연산자가 falsy 한 값 (`false`, `0`, `null`, `undefined`, `NaN`) 일 경우 오른쪽 피연산자를 평가하고 반환한다

- 즉, 첫 번재 truthy 값을 찾을 때까지 평가를 계속한다는 것을 의미한다

---

`||` 는 왼쪽 값이 falsy 한 값일 경우 오른쪽 값을 평가하고,

`??` 는 왼쪽 값이 null 이나 undefined 일 경우에만 오른쪽 값을 평가한다는 차이가 있다.

따라서, null 이나 undefined 를 명확히 구분해야 하는 상황에서 `??` 연산자를 사용하는 것이 적합하고,

그 외의 보다 일반적인 상황에서는 `||` 연산자를 사용할 수 있다.

---

2번 문제 push, pop, shift, unshift 순수함수
3번 문제 reduce
6번 문제 정규식 자음
7번 문제 ts
