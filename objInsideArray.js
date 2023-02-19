// very usefull in real world application
const Users = [
    {userID : 1, firstName : "Hemant", gender : "male"},
    {userID : 2, firstName : "Mohit", gender : "male"},
    {userID : 3, firstName : "Rohit", gender : "male"},

];
// console.log(Users);
for (let user of Users){
    console.log(user["firstName"]);
}

// nested destructuring

const [user1,user2,user3] = Users;
console.log(user1);
console.log(user2);
console.log(user3);

// if you want to access the element of object
const [{userID},{firstName},{gender}] = Users;
console.log(userID,firstName,gender);

