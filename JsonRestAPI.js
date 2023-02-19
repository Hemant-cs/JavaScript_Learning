// const URL = "https://jsonplaceholder.typicode.com/users";

// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL) //config request type and URL
// // console.log(xhr);

// // xhr.onreadystatechange = function(){
// //     // console.log(xhr);
// //     if(this.readyState === 4){
// //         console.log(xhr.responseText);
// //     }
// // }

// xhr.onload=()=>{
//     // console.log(xhr.readyState);
//     const responce = xhr.response; // gives responce as string
//     const data = JSON.parse(responce); // after parse it will convert to JavaScript object
//     console.log(data);
// }

// xhr.send();




// const URL = "https://jsonplaceholder.typicode.com/users";

// const xhr  = new XMLHttpRequest;

// // console.log(xhr);

// xhr.open("GET",URL);

// // console.log(xhr);

// xhr.onload = ()=>{
//     if(xhr.status >= 200 && xhr.status < 300){
//     console.log(xhr.response);
//     }else{
//         console.log("Something went wrong")
//     }
// }

// xhr.onerror=()=>{
//     console.log("network error") //to Handle network error
// }

// xhr.send();





const URL2 = "https://jsonplaceholder.typicode.com/users";

const xhr2 = new XMLHttpRequest();

xhr2.open("GET",URL);

// console.log(xhr2);

xhr2.onload = ()=>{
    console.log(xhr2)
}













