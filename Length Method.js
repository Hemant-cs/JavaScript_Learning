let firstName = prompt("Enter your First Name")
let lastName = prompt("Enter your Last Name")
if (firstName.length>=10){
    if (lastName.length>=10){
        console.log("Your first and last Name is greater than 10")
    }else{
        console.log("Only your first Name is greather than 10")
    }    
}else{
    console.log("Your first and last Name is less than 10")
}
