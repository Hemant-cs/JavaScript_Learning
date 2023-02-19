function about(name, age){
    console.log(`your ID is ${this.id}, Name is ${name} and age is ${age}`);
}

const user1={ id : 1}
const user2={ id : 2}
const user3={ id : 3}
const user4={ id : 4}


// about.call(user1,"Hemant",22); //if you are using call method

about.apply(user2,["Shanu",25]); // if you are using apply method there is only diffrence of array

