// two ways to iterate objects
// 1.for in loop
const person = {
    name : "Hemant",
    age : 22,
    gender : "male",
    hobbies : ['reading books','chess'],
};
// console.log(person[]);
for (key in person){
    // console.log(key,":", person[key]);
    console.log(`${key} : ${person[key]}`);
}