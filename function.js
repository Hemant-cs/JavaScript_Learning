// function person (name){
//     return name[0].toUpperCase();
// }

// or(using funcation expression)

// const person = function(name) {
//     return name[0];
// }


// or using arrow funcation

// const person = name => name[0].toUpperCase();
// console.log(person("hemant"))


// function isEven(num){
//     if (num %2 === 0){
//         return true;
//     }
//     return false;
// }

// or

// function isEven(num) {
//     return num %2 ===0;    
// }
// console.log(isEven(4));

// or(using funcation expression)

// const isEven = function(num) {
//     return num%2===0;
// }
// console.log(isEven(4));

//or(using arrow function) 

// const isEven = (num) =>{
//     return num %2 === 0;
// }
// console.log(isEven(4));

// or (simplified way)

const isEven = num => num %2 ===0;
console.log(isEven(4));


// function firstChar(str){
//     return str[0];
// }


// const firstChar = function(str){
//     return str[0];
// }

// const firstChar = (str) =>{
//     return str[0];
// }
// console.log(firstChar("Hemant"));

const twoSum = (num1,num2) => {
    return num1+num2;
}
console.log(twoSum(4,5));

const threeSum = function(num1,num2,num3){
    return num1+num2+num3;
}
console.log(threeSum(2,4,6));


function twoMulti(num1,num2){
    return num1*num2;
}
console.log(twoMulti(7,8));