let a = 12n
let b = 10n
let c = 20
console.log(a+b); // "n" refers BigInt data type

console.log(Number(a)+c); // it's will convert Big Int to Int o/p will be 32

// console.log(a+c) //giver error because you can not add Big Int with Int

// to check maximum number can be store in BigInt data type

console.log(c.MAX_SAFE_INTEGER);
