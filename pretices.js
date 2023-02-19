// // convert user's age year to days

// function ageToDays (year){
//     return (`User age in days is ${year*365}`);

// }

// // console.log(ageToDays(65));

// const powerCalc = function(volt, current){
//     return volt*current;
// }
// // console.log(powerCalc(25,3.5));

// const reminder = function(num1,num2){
//     return num1%num2;
// }

// // console.log(reminder(3,4));


// const sumPolygon = function(angle){
//     if (angle <= 2){
//         return "invaild angle";
//     }
//     else{
//         return (angle - 2)*180;
//     }
// }
// console.log(sumPolygon(2));
const addUp = function(num){
    let sum = 0;
    for (let i = 1; i <= num; i++){
       sum = sum + i;
    }
    return sum;
}
console.log(addUp(4));