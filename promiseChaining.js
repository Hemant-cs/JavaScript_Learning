// function myPromise(){
//     return new Promise(()=>{
//         console.log("foo");
//     })
// }

// myPromise().then((value)=>{
//     value += "Baaz";
//     console.log(value);
// }).then((value)=>{
//     console.log(value);
// })

// const myPromise = Promise.resolve("foo");

// console.log(myPromise);
// myPromise.then((value)=>{
//     console.log(value)
//     value += "Bar";
//     return value;
// }).then((value)=>{
//     console.log(value);
//     value += "Bazz";
//     return value
// }).then((value)=>{
//     console.log(value)
// })

const Header1 = document.querySelector(".header1");
const Header2 = document.querySelector(".header2");
const Header3 = document.querySelector(".header3");
const Header4 = document.querySelector(".header4");
const Header5 = document.querySelector(".header5");
const Header6 = document.querySelector(".header6");
const Header7 = document.querySelector(".header7");

function changeHeader(element, text, color, time) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject();
            }
        },time)

    })
  
}

changeHeader(Header1, "one", "red",1000)
 .then(()=>{return changeHeader(Header2,"two","green",1000)})
 .then(()=>{return changeHeader(Header3,"three","blue",1000)})
 .then(()=>{return changeHeader(Header4,"four","orange",1000)})
 .then(()=>{return changeHeader(Header5,"five","gray",1000)})
 .then(()=>{return changeHeader(Header6,"six","yellow",1000)})
 .then(()=>{return changeHeader(Header7,"seven","pink",1000)}).catch((err)=>{alert(err)})
