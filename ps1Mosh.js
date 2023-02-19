
// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;



// console.log(a);
// console.log(b);


// excersie  

// const isLandscape = function (width , length){
//     return (width > length) ? "It's Landscape" : "It's Portrait";
// }

// console.log(isLandscape(100,24));

// excersice

// const fizzBuzz = function(num){
//     // console.log(typeof num);

//     if ('number' === (typeof num)){
//         if ((num % 3 === 0) && (num % 5 === 0)){
//             return "FizzBuzz";
//         }else if(num % 5 === 0){
//             return "Buzz";
//         }else if (num % 3 === 0){
//             return "Fizz";
//         }else if ((num % 3 !== 0) && (num % 5 !== 0)){
//             return num;   
        
//     }
//     }else{
//         return NaN;
//     }

// }

// console.log(fizzBuzz(false));
// speed limit = 70
// 5 -> 1 Point
// Math.floor()
// 12 -> licence suspended

// const checkSpeed = function(speed){
//     const speedLimit = 70;
//     const pointPerKm = 5;
//     const points = Math.floor((speed - speedLimit) / pointPerKm);
//     if (speed < speedLimit + pointPerKm){
//         console.log('ok');
//     }
//     if (points > 12){
//         console.log('Licence Suspended');
//     }
//     else {
//         console.log(`Point : ${points}`);        
//     }
// }
// checkSpeed(170);

// const showNumber = function(num){
//     for (let i = 0; i <= num ; i++){
//         if (i %2 === 0 ){
//             console.log(`${i} : 'Even'`);
//         }
//         else{
//             console.log(`${i} : 'Odd'`);
//         }
//     }
// }

// showNumber(10);


// falsy
// indefined
// null
// ''
// false
// 0
// Nan

// function myArray(array){
//     let truthy = 0;
//     const falsyArray = [undefined, null, '', false, 0, NaN];
//     for (let item of array){
//         for (let itemF of falsyArray ){
//             if (itemF !== item){
//             truthy++;
//             }
//         }
//     }
//     console.log(truthy);
// }
// const ary = ["Hemant","sapna",0,NaN,"Hemant","Sahu"]; 
// console.log(myArray(ary));

// function myArray (array){
//     let truthy = 0;
//     for (let item of array){
//         if(item) truthy++;
//     }
//     return truthy;
// }

// const movie = {
//     title : 'a',
//     releaseYear : 2012,
//     rating : 4.5,
//     direactor : 'b'
// };

// const properties = function(obj){
//     // console.log(obj);
//     for (let key in obj){
//         if ("string" === (typeof obj[key])){
//             console.log(`${key} ${obj[key]}`)
//         }

//     }
// }
// properties(movie)   ;
// // console.log(movie[""]);

// const sum = function(limit){
//     let sumThree = 0;

//     for (let i = 1; i <= limit; i++){
//         if (i %3 === 0 || i %5 === 0){
//             sumThree = sumThree + i;            
//         }
    
//     }

//     console.log(sumThree);
// }

// sum(10);

// const findGrade = function(array){
//     let avg =0;
//     let sum = 0;

//     for (let i of array){
//         sum = sum + i;
//     }
//     avg = sum / (array.length);
//     if (avg <= 59 ) return 'F';
//     else if (avg <= 69) return 'D';
//     else if (avg <= 79) return 'C';
//     else if (avg <= 89) return 'B';
//     else return 'A';
// }

// console.log(findGrade([80,90,90]));



// const stars = function(rows){
//     let pattern = '';
//     for (let i = 1; i <= rows; i++){
//         for (let j = 1; j <= i; j++){
//             pattern += '*';
//             console.log(pattern);            
//         }
                        
//     }
    
// }


// const star = function(rows){
//     let pattern = '';
//     for (let i = 1; i <= rows; i++){
//         // for (let j = 1; j <= i; j++){
//         // }
//         pattern = pattern + '*';
//         console.log(pattern);
//     }
// }
// star(5);


const prime = function(limit){
    for (let number = 1; number <= limit; number++){
        if (number %2 === 0 && number %3 === 0){
            console.log(number);
        }
        
    }
}
prime(10);