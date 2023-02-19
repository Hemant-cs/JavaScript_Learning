// function hello(){
//     console.log('Hello');
// }

// // hello();

// // hello.xyz = 'xyz'
// // console.log(hello.xyz);
// hello.prototype.abc = 'abc';
// hello.prototype.about = function(){
//     return 'my function';
// }
// console.log(hello.prototype);
// console.log(hello.prototype.about());

// const aboutUser = {
//     about : function(){
//         console.log(`${this.firstName} is ${this.age} old`);
//     }
// }


// function userInfo(firstName, lastName, age){
//     const user = Object.create(userInfo.prototype);
//     user.firstName = firstName,
//     user.lastName = lastName,
//     user.age = age
//     return user;

// }

// userInfo.prototype.about =  function(){
//             return(`${this.firstName} is ${this.age} old`);
//         }

// const user1 = userInfo('Hemant', 'Chaurasia', 22);

// console.log(user1.about());


function aboutUser(firstName, lastName, age, email){
    const user = Object.create(aboutUser.prototype);
    user.firstName = firstName,
    user.lastName = lastName,
    user.age = age,
    user.email = email
    return user;
}


aboutUser.prototype.about = function(){
    return `${this.firstName} is ${this.age}'s old`
}

const user1 = aboutUser('Hemant', 'Chaurasia', 22, 'chaurasia.hemant@tcs.com');
user1.prototype
console.log(user1.prototype);