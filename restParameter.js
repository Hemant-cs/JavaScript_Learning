function sumOfNumber(...a){
    let sum = 0;
    for (let i of a){
        sum = sum + i;
    }
    console.log(sum);

}

// function sumOfNumber(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log("c is",c);
// }

sumOfNumber(5,3,5,6,7,8,9);