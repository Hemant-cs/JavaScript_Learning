

const bucket = ["rice","fruits","vegitable","salts","cucumber"];


const friedRicePromice = new Promise((resolve,reject)=>{
    if(bucket.includes("vegitable") && bucket.includes("rice") && bucket.includes("salt")){
        resolve("fried rice");
    }else{
        reject("couldn't not perform");
    }
})

friedRicePromice.then((myFriedRice)=>{

    console.log("let's eat", myFriedRice)
}).catch((err)=>console.log(err));