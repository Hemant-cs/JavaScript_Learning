// function myFunc(a,b){
//     return function(x){ //when it's return this function it's will also retrun the variable a & b. that is what clousers
//         console.log(a,b,x);
//     }
// }


// const ans = myFunc(3,4);
// ans(6);


function myFunc(){
    let counter = 0 ;
    return function(){
        if(counter < 1){
            console.log("Hi, you called me");
            counter++;
        }
        else{
            console.log("Hey! you already called me");
        }
    }
}

const ans = myFunc();
ans();
ans();
ans();
ans();
ans();