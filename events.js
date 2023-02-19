const ans = document.querySelector("#one");

const randomColorGenerator = ()=> {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

ans.addEventListener("click", ()=>{
    document.body.style.backgroundColor = randomColorGenerator();
  ans.textContent = randomColorGenerator();
});

document.body.addEventListener("keypress",(e)=>{
    console.log(e.key);
})

ans.addEventListener("mouseover",e=>console.log("mouse over event occoured"));
ans.addEventListener("mouseleave",e=>console.log("mouse leave event occoured"));

