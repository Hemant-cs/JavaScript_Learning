const URL = "https://jsonplaceholder.typicode.com/users";

// async will retrun a promise
//await will wait till given thing get resolve


// const result = fetch(URL)
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))

async function getPosts(){
    const response = await fetch(URL)
    console.log(response)
    if(!response.ok){
        throw new Error("Somthing went wrong")
    }else{
        const data = await response.json()
        return data;
    }
    
}

    getPosts().then(data=>console.log(data))