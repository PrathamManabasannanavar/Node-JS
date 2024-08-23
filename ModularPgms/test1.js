// I did this because to know whether node js imports only function required by the require() but it executes the whole module
//And then executes the test2 script --> synchronous execution

function hello(){
    console.log("hello user");
}

module.exports = {
    hello
}   //I thought it would end here
console.log("in test1"); //this line was also executed