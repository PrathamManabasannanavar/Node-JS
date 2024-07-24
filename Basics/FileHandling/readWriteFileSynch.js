const fs = require('fs');
// const { exit } = require('process');
try{
    let test1 = fs.readFileSync('test1.txt', "utf-8");
    console.log(test1);
    fs.writeFileSync("test2.js", test1);
    fs.unlink("test2.txt", (fileError)=>{
        if(fileError){
            console.log("error occured");
            process.exit(1);
        }
        console.log("deleted", fileError);
    });
}catch{
    console.log("no File found");
}
