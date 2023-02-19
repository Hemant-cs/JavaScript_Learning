class Animal{
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    eat(food){
        return(`${this.name} is eating ${food}`)
    }

    isCute(){
        return (this.age <= 4);
    }
}


class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed
    }

    run(){
        return(`${this.name} is running at ${this.speed}Kmph`)
    }
}

const tommy = new Dog("Tommy", 4, 16);

console.log(tommy.run());
console.log(tommy.isCute());
console.log(tommy.eat("chiken"))


console.log(firstName);
var firstName = 'Hemant';
console.log(firstName);
