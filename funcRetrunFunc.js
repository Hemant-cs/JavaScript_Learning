function myFunc1(){
    function myFunc2(){
        return "Hello,I am Function2"
    }
    return myFunc2;
}

const ans = myFunc1();

console.log(ans());
