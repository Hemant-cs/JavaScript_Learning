// const arr1 = ['item1','item2'];
// const var1 = arr1[0];
// const var2 = arr1[1];
// console.log(var1,var2);


// in simple way(shortcut)

// let [var1,var2] = arr1;  
// console.log(var1,var2); 

// if there is more item in array but we declare less variable then

const arr1 = ['item1','item2','item3'];
// let [var1,var2] = arr1;
// console.log(var1,var2);

// there is no error
// the third one will be left 

// if there is more variable but there no item in array

// let [var1,var2,var3,var4] = arr1;
// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var4); //it's will be undefined

// if you want to skip any element then

// let [var1, ,var3] = arr1; //item2 will be skip as there is no variable to store
// console.log(var1,var3);


//if you want to make new array during destructuring

let [var1, ...newArray] = arr1; //rest of the item will store in newArray
console.log(var1);
console.log(newArray);
