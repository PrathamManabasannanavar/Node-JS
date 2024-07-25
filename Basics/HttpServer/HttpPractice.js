const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) =>{
    console.log(request.url);
    if(request.url == "/favicon.ico"){
        return;
    }
    fs.appendFile("logFile.txt", `${request.url}  ${Date.now()}\n`, (err)=>{
        if(err){
            console.log("error occured!!");
            return;
        }
    })
    response.end("ended the response");
});

server.listen(2000);

console.log(server.url);