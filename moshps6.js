// let address1 = new address('a','b','c');
// let address3 = address1 ;


// let address2 = new address('a','b','c');


// function address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode
// }

// function isEqual(address1, address2) {
//     if (address1 === address2) {
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }

// isEqual(address1,address2);


// function areSame(address1, address2) {
//     return address1.street === address2.street && address1.city === address2.city && address1.zipCode===address2.zipCode;
// }

// console.log(areSame(address1,address2));

// let blog = new Blog('a','b','c');
// console.log(blog);


// function Blog(title, body, autor) {
//     this.title = title,
//     this.body = body,
//     this.autor = autor,
//     this.views = 0,
//     this.comments = [],
//     this.isLive = false
    
// }


// let range = new Range(1,10);
// console.log(range);


// const arry = [1,2,3,4,5,6];
// console.log(arry.indexOf(1));



// const arry = [
//     {name : 'a', id : 1},
//     {name : 'b', id : 2},

// ];

// console.log(arry.find(function (element) {
//     return element.name === 'a';    
// }));


// console.log(arry.find(element=>element.name === 'a' ))


// Adding

//end
//push--> adding element at the end of array
//start
//unshift method--> adding element at the starting of the array
//middle
//slice() method --adding element at middle of array

// const number = [];

// number.push(1,2,3,4,5);
// console.log(number);


//removing the element

//end
//pop-->removing element form end

// number.pop();
// console.log(number);


//starting
//shift --> removing element from starting

// number.shift();
// console.log(number);

//middle
//splice method --> removing element from given index number
// splice syntax: slice(start,delete count,item1,item2)
// item1,item2 are optional

// to empty an array
// method1
// let number = [1,2,3,4,5];
// const j = (number.length)
// number=[]
// console.log(number)

// method2(recommended)

// number.length = 0;
// console.log(number)

// method3
// number.splice(0,number.length)
// console.log(number)

// method 4(not recommeded)
// for(let i = 0; i<j; i++){
//     number.pop();
// }
// console.log(number)

//adding two array

// const arry1 = [1,2]
// const arry2 = [3,4]

// const combined = arry1.concat(arry2);

// console.log(combined)


function arrayFromRange(min,max) {
    let arry = [];
    if (min<max){
        for (let i = min; i<=max;i++)  {
            arry.push(i);
        } 
        return arry;
    }
    else if (min===max) {
        // let arry1=[];
    //   return arry1.push(min);  
      return min;  
    } 
    else {
        return "Invalid Input";
    }
}

console.log(arrayFromRange(10,10));