// let arr1 = ['item1','item2','item3'];
// let arr2 = [];
// for (let i = 0; i < arr1.length; i++){
//     arr2.push(arr1[i]);
// }
// console.log(arr2);

// we can create our array using const keyword

// let arr1 = ['item1','item2','item3'];
// let arr2 = [];
// for (let i = 0; i < arr1.length; i++){
//     arr2.push(arr1[i]);
// }
// console.log(arr2);

// in const keyword, we can't change the value of array after declaration

// const fruits = ["banana","apple","mango"]
// fruits = ["kiwi"]; //will give error because you can't change the value
// console.log(fruits);


// for loop
const arr1 = ['item1','item2','item3'];
// for (let i = 0; i < arr1.length; i++){
//     console.log(arr1[i]);
// }

// while loop

// let i = 0;
// while (i < arr1.length){
//     console.log(arr1[i]);
//     i++;
// }


// for of loop

// for (let i of arr1){
//     console.log(i); //here "i" will retrun the value in array1 not index position
// }

// for in loop

for (let i in arr1){
    console.log(i); //here "i" will return the value of index
}