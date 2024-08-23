const fs = require('fs');

function readData(){
    const data = fs.readFile('test1.txt', 'utf-8');
    then((result) => {
        console.log(data);
    }).catch((err) => {
        console.log("FIle not found");
    });
}

readData();