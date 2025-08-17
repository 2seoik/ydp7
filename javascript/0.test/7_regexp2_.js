const assert = require("assert");
/*
문자열 str에서 대문자만 골라 소문자로 변환하세요. (trythis: 대문자 <-> 소문자)
upperToLower('Senior Coding Learning JS');  
         // ⇒ '*s*-enior *c*-oding *l*-earning *j*-*s*-' 


전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
telfmt('0101234567');    // '010-123-4567'
telfmt('01012345678');   // '010-1234-5678'
telfmt('0212345678');    // '02-1234-5678'
telfmt('021234567');     // '02-123-4567'
telfmt('0331234567');    // '033-123-4567'
telfmt('15771577');      // '1577-1577'
telfmt('07012341234');   // '070-1234-1234'
ex) in JSX
   <small>{telfmt(user.tel)}</small>
*/

// assert.strictEqual(upperToLower('Senior Coding Learning JS'), '*s*-enior *c*-oding *l*-earning *j*-*s*-');




assert.deepStrictEqual(telfmt('15771577'), '1577-1577');          // 8     4-4
assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');     // 033 인 10
assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');     // 10    3-3-4
assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678'); // 12    4-4-4
assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');   // 11    3-4-4
assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');     // 02인 10자리 2-4-4
assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');       // 02인 9자리  2-3-4
assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');   // 070 인 11자리  3-4-4
return
