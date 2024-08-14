let p1 = new Promise((resolve, reject)=>{
    resolve(20);
    reject(30);
    console.log("hi");
}).then((value)=>{
    console.log(value);
}).catch((value)=>{
    console.log("rejeted by the ", value);
})

//here there might be only 2 possible states 1 --> fullfilled(resolved)
//                                           2 --> rejected(reject)
//so whenever the resolve() or rejected() is called it is understood that **first state is taken ** and other all states are rejected