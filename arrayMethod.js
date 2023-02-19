// changing the value of Array

let fruits = ["apple", "mango", "kiwi"];
console.log(fruits);
fruits[2] = "banana";
console.log("changed value of array is", fruits);

// push method (this will add element in last & this is having high speed)
fruits.push("kiwi");
console.log(fruits);


// pop method (this will delete element form last & this is having high speed)

let poppedElement = fruits.pop();
console.log(fruits);

console.log("popped element is",poppedElement)


// unshift (this will add element in starting & this is not fast method as compare with push)
fruits.unshift("kiwi");
console.log(fruits);

// shif method(this oppsite of unshift method)
fruits.shift();
console.log(fruits);