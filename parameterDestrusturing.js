const person = {
    firstName :  "Hemant",
    age : 22,
    gender : "male"
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.age);
//     console.log(obj.gender);
// }

function printDetails({firstName,age,gender}){
    console.log(firstName);
    console.log(age);
    console.log(gender);
}
printDetails(person);