// console.log("Script Start");
// const stopBtn = document.querySelector("#one");
// const randomColorGenerator = ()=>{
//     const red = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     return `rgb(${red},${green},${blue})`
// }

// stopBtn.addEventListener("click",()=>{
//     clearInterval(intervalId);
//     const colorCode  = randomColorGenerator()
//     stopBtn.textContent = colorCode;

//     document.body.style.backgroundColor = "white";
// })
// // const bodyBg = document.body.style.backgroundColor;

// const intervalId = setInterval(()=>{
//     document.body.style.backgroundColor = randomColorGenerator();
// },500)

// console.log("Script End");

const oneHeader = document.querySelector(".header1");
const twoHeader = document.querySelector(".header2");
const threeHeader = document.querySelector(".header3");
const fourHeader = document.querySelector(".header4");
const fiveHeader = document.querySelector(".header5");
const sixHeader = document.querySelector(".header6");
const sevenHeader = document.querySelector(".header7");

//this is called Callback hell

setTimeout(() => {
  oneHeader.textContent = "one";
  oneHeader.style.color = "violet";
  setTimeout(() => {
    twoHeader.textContent = "two";
    twoHeader.style.color = "purple";
    setTimeout(() => {
      threeHeader.textContent = "three";
      threeHeader.style.color = "red";

      setTimeout(() => {
        fourHeader.textContent = "four";
        fourHeader.style.color = "pink";
        setTimeout(() => {
          fiveHeader.textContent = "five";
          fiveHeader.style.color = "green";
          setTimeout(() => {
            sixHeader.textContent = "six";
            sixHeader.style.color = "blue";
            setTimeout(() => {
              sevenHeader.textContent = "seven";
              sevenHeader.style.color = "brown";
            }, 1000);
          }, 3000);
        }, 2000);
      }, 1000);
    }, 2000);
  }, 2000);
}, 1000);
