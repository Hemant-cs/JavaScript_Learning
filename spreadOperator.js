const person1 = {
    name : "Hemant",
    age : 22,
};
const person2 = {
    name2 : "Harshit",
    age2 : 22,
};
const obj = {...person2,...person1,key90 : "value90"}
console.log(obj);