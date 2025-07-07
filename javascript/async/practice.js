/*
console.time('async-await-promise.all');
console.log(await Promise.all([afterTime(1), afterTime(2), afterTime(3)]));
console.timeEnd('async-await-promise.all');
*/


// async function afterTime(val) {
//     if (val % 2 === 1) return val
// }

const afterTime = sec => new Promise(resolve => setTimeout(resolve, sec * 1000, sec));


const rrr = await Promise.all([afterTime(1), afterTime(2), afterTime(3)])

console.log('odds=', rrr);
