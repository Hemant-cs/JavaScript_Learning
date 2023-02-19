
function about(hobby, favMusic){
    console.log(`your name is ${this.name}, age is ${this.age}, Hobbies are ${hobby} and favorite music is ${favMusic}`);
}



const user1 = {
    name : "Hemant",
    age : 22
}

const user2 = {
    name : "Shanu",
    age : 26
}


about.call(user1,"chess","tum jo aaye");
