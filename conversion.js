// const age = 19;

// const age2 = String(age);

// const name = "Hemant";
// const lastName  = "Chaurasia";

// console.log(name, lastName);

// const numbers = [1, 2, 3, 4, 5, 6];

// function mulBy2(number, index) {
//   console.log(`index is ${index}`);
//   console.log(`${number} * 2 = ${number * 2}`);
// }

// for (let i = 0; i < arry.length; i++) {
//   mulBy2(arry[i], i);
// }

// numbers.forEach((number)=>{console.log(`${number} * 2 = ${number * 2}`);});


// for(let number of numbers){
//   console.log(number*2);
// }

// const numfunc = (number,index)=>{console.log(`index is ${index} and number is ${number}`)}

// numbers.forEach(numfunc);


// const sqaureNumber = numbers.map(number=> (number*number));
// numbers.map(number=> console.log(number*number));

// console.log(sqaureNumber);


const productList = [
    {productId:1, productName : "Samsung A31 Mobo", price : 18000},
    {productId:3, productName : "Smart Watch", price : 5000},
    {productId:0, productName : "Laptop", price : 26500},
    {productId:2, productName : "Boult Audio", price : 1300},
]


// const totalAmount = productList.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// },0);


// console.log(totalAmount);

// productList.sort((a,b)=>b.price-a.price)

// console.log(productList)



// const num = [5,9,500,400,1200];

//  num.sort((a,b)=>{return a-b})

// console.log(num);


// const Numbers = [9,5,1200,410,3000]

// Numbers.sort((a,b)=>{
//     return a-b;
// });

// console.log("Hemant")


const animal = ['doggyy','miaawwuu','dog','lion']

// const finded = animal.find(query=>query.length === 3);

// console.log(finded);
// const ans = productList.find(query=>query.productId === 0);

// console.log(ans);


const num  = [1,2,2,2,2,1,3,4,5,4,5,5,5,3];


const setNum = new Set(num);

// console.log(setNum);


// console.log(setNum.has(1)); //return true if given element is present
function userInfo2 (){
console.log(`gender is ${this.gender}`)
}

// userInfo2();

function userInfo (){
    console.log(`user name is ${this.name} and age is ${this.age}`)
}
const user1 = {
    id : 0,
    name : "Hemant",
    age : 22,
    gender  : "male",
    about : userInfo,
    etc : userInfo2
}
const user2 = {
    id : 2,
    name : "Shanu",
    age : 20,
    gender  : "male",
    about : userInfo
}
const user3 = {
    id : 3,
    name : "Harsh",
    age : 15,
    gender  : "male",
    about : userInfo
}



user1.about();

user1.etc();
// for (let key in users){
//     console.log(users[key]);
// }


// console.log(users.name)


