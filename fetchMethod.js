//fetch

const URL = "https://jsonplaceholder.typicode.com/users";
// console.log(URL)
// const res = fetch(URL).then(responce=>responce.json()).then(data=>console.log(data));
// console.log(res)

const res = fetch(URL)
    .then(response=>{
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error("something went wrong")
        }
    })
    .then(data=>console.log(data))
    .catch(err=>console.log(err));

//json.stringify({title:''hemant';id:0}) will convert object to JSON format