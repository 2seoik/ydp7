/**
 * 다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.

const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'}
delete user.passwd;
Object.definedProperty(user, 'passwd', {enumerable: false});
const {...} = user;
console.log(userInfo); 
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}

 */
