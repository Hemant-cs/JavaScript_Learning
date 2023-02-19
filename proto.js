// const obj1 = {
//     key1 : 'value1',
//     key2  : 'value2'
// }

// // let obj2 ={
// //     key3 : 'value3'
// // }

// const obj2 = Object.create(obj1);

// obj2.key3 = 'value3'

// console.log(obj2.__proto__);

const userMethod = {
  about: function () {
    return `${this.firstName} is ${this.age} old`;
  },
  isAdult: function () {
    if (this.age >= 18) {
      return "Adult";
    } else {
      return "Ninja";
    }
  },
};

function userInfo(firstName, lastName, age) {
  const obj = Object.create(userMethod);
  (obj.firstName = firstName), (obj.lastName = lastName), (obj.age = age);
  return obj;
}

const user1 = userInfo("Hemant", "Chaurasia", 22);

console.log(user1.about());
