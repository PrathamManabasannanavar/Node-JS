const http = require('node:http');
const url = require('url');

const server = http.createServer((req, resp)=>{
    if(req.url == '/favicon.ico'){
        return;
    }
    // console.log(req.url)
    const urlParam = url.parse(req.url.toString(), true);
    console.log(urlParam.query);

    // console.log("hello " + urlParam.query.name);
    resp.end("hello " + urlParam.query.name);
});

server.listen(8080);
