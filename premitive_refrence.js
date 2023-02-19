// premitive data type 
// data will store in stack 
// let var1 = "item1";
// let var2 = var1;
// console.log("value in var1 is", var1);
// console.log("value in var2 is", var2);
// var1 = "item2";
// console.log("value of var1 after change", var1);
// console.log("value of var2 after change", var2);


// refrence data type
// in refrence data type, data will store in heap
let arr1 = ["item1","item2"];
// let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);
// arr1.push("item3");
// console.log(arr1);
// console.log(arr2); 
//here item3 automactic append to arr2 but we have append only arr1
// to overcome this problem here clone concept come in light.

// 1. slice method

// let arr2 = arr1.slice(0) //start form zero and go upto last
// console.log("value of array1 ",arr1);
// console.log("value of array2",arr2);
// arr1.push("item3");
// console.log("value after change in array1", arr1);
// console.log("value after change array2",arr2);
// it's correct now because there is diffrenent memory location of aaray1 and array2

// 2. concat method
// let arr2 = [].concat(arr1);
// console.log("value of array1 ",arr1);
// console.log("value of array2",arr2);
// arr1.push("item3");
// console.log("value after change in array1", arr1);
// console.log("value after change array2",arr2);

// 3. spread method
let arr2 = [...arr1];
console.log("value of array1 ",arr1);
console.log("value of array2",arr2);
arr1.push("item3");
console.log("value after change in array1", arr1);
console.log("value after change array2",arr2);

