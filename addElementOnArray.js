// if you want to added element there is two method

// 1. using concat

let arr1 = ['item1','item2'];
// let arr2 = arr1.slice(0).concat("item3");
// console.log("value of array1 ",arr1);
// console.log("value of array2",arr2);

// 2. using spread

// let arr2 = [...arr1,"item3"];
// console.log(arr1);
// console.log(arr2);

// you can also merge arrays using spread method

let arr2 = ['item3','item4'];
arr1 = [...arr1,...arr2];
console.log(arr1); 