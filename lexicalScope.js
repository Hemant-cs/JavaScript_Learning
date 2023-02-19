const myVar = "value0";
function myValue (){
    // const myVar = "value1";
    function myFunc (){
        // const myVar = "value2";
        console.log("Hello form inside function",myVar);
    }
    myFunc();
}
myValue();