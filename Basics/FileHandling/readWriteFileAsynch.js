const file = require('fs');

file.readFile("test1.txt", (err, data)=>{
    if(err){
        console.log("error occured");
        process.exit(0);
    }
    console.log(data.toString()); //o/p is in buffer(numbers) --> convert to string

});

let str = "this is string";
file.writeFile("test2.txt", str, (err)=>{
    if(err){
        console.log("error occured");
        process.exit(0);
    }
});