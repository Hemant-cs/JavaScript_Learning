class Animal{
    constructor(food){
        this.food = food
    }
    eating(){
        console.log(`eating ${this.food}.....!`);
    }
}

class Dog extends Animal{

}

const tommy = new Dog("milk");

tommy.eating();