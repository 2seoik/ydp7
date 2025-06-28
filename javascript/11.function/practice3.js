/**
 * 다음 코드에 있는 template 함수를 작성하세요.

const before = () => console.log('before....');
const after = (result) => console.log('after...', result); // result는 f의 결과!

const someFn = (name, greeting) => `${greeting}, ${name}`;
const someFn2 = (id, nickname, email, level) => `${id}/${nickname}/${email}/${level}`;

const template = // 코드를 완성하세요.

const temp = template(someFn);  // before → someFn → after 실행
const temp2 = template(someFn2);  // before → someFn2 → after 실행

temp('sico', 'hello');
console.log('temp1>>', temp2(1, 'sico', 'sico@gmail.com', 5));


 */
