class aboutUser {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.email = email;
    }
    about() {
        return (`${this.firstName} ${this.age}`);
    }
}



const user1 = new aboutUser('Hemant', 'Chaurasia', 22, 'chaurasia.hemant@tcs.com')

console.log(user1.about());
console.log(aboutUser.prototype);