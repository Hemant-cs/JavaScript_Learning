// function about(name,age){
//     console.log(`your Id is ${this.id}, Name is ${name} and age is ${age}`)
// }

// const user1 = {id:1}
// const user2 = {id:2}
// const user3 = {id:3}
// const user4 = {id:4}

// const aboutUser = about.bind(user1,"Hemant",22);

// aboutUser();
// // console.log(aboutUser());



function about(){
        return `${this.fristName} is ${this.age} old`;
}
function fullName(){
    return `${this.fristName} ${this.lastName}`;
}

function usersInfo(fristName, lastName, age){
    let users = {}
    users.fristName  = fristName,
    users.lastName = lastName,
    users.age = age,
    users.about = about,
    users.fullName = fullName
    return users;

}

const user1 = usersInfo('Hemant', 'Chaurasia', 22);
const user2 = usersInfo('Shanu', 'CS', 25);
const about1 = user1.about();
const about2 = user2.about();
const full2 = user2.fullName();
console.log(full2);