const promise = new Promise((resolve, reject) =>{
    // resolve(20);
    reject(new Error())
});

promise.then((value)=>{
    console.log("resolvedwith ", value);
}).catch((err)=>{
    console.log("errorm throwed");
})