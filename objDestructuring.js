const person = {
    name : "Hemant",
    age : 22,
    
};
// const nameOfPerson = person.name;
// const ageOfPerson = person.age;
// console.log(nameOfPerson, ageOfPerson)

//or
// by this we can change the name of variable
const {name : nameOfPerson,age : ageOfPerson} = person;
console.log(nameOfPerson);
console.log(ageOfPerson);

