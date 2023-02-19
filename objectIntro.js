//array is not sufficient to store real world data
//object will store data in key value pair
let person = {
    name : "Hemant",
    age : 22,
};
// console.log(person);

// be default key of object will be string

// how to access data form object

// console.log(person.name);
// console.log(person.age);

// how to add key value pair in object

person.gender = "male";
// console.log(person);

// how to access data form object using bracket method

// console.log(person["name"]);
// console.log(person["gender"]); //you have to pass the value of key in string

// you can also pass the value of key in array

person.hobbies = ['reading','chess','listening music'];// spces are not allowed in dot notaion

// you can also add key value pair using bracket notaion

person["person hobbies"] = ['reading books','listening music','sleeping'];
console.log(person);

