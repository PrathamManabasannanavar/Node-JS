export const add = (a, b)=>{
    return a+b;
}

export const sub = (a, b)=>{
    return a-b;
}

console.log("hi");

//when we use default exports the whole object is containing add & sub is exported so can't use {add, sub} in the import
// named exports always are individual exports you can seperately call it

//This also executes asynchronously but executes the whole module which is imported.

// export default{
//     add,
//     sub
// }