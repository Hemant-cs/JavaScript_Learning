let randomNumber = Math.floor((Math.random() * 2) + 1);;
let guessNumber = +prompt("Guess a number Between 0 to 2:");
if (guessNumber === randomNumber){
    console.log("You Win!!! you guess right number")
}else if (guessNumber > randomNumber){
    console.log("You Loose!!! too high")
}else{
    console.log("You Loose!!! too low")
}