const person = {
    name : "Hemant",
    age : 22,
    gender : "male",
    hobbies : ['reading books','chess'],
};
// console.log(Object.keys(person)); //this will return array
// let's check is it array or not
// console.log(Array.isArray(Object.keys(person)));
// console.log(typeof person);

for(let key of Object.keys(person)){
    console.log(key, ":", person[key]);
}