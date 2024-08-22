const express = require('express')
const fs = require('fs')
const data = require('./MOCK_DATA.json')

const app = express()

//mediators
app.use(express.urlencoded({extended:false}))

app.route('/api/users')
.post((req, resp)=>{
    const body = req.body //It is a property which consists of sent data
    console.log(body)
    data.push(body)
    fs.writeFile('./test.json', JSON.stringify(data), (err)=>{
        if(err){
            console.log("error: ",err)
        }
    })
    resp.send("Details received")
})

.patch((req, resp)=>{
    const body = req.body
    console.log(body)
    let i = 0
    for(const user of data){
        if(user.id == body.id){
           data[i] = body
           fs.writeFile('test.json', JSON.stringify(data), (err)=>{
            if(err){
                console.log("err",err);
            }
           })
           resp.send("sucessfully updated");
           return
        }
        i++
    }
    resp.send("can't update");

})


app.listen(8080, ()=>{
    console.log("Listening...");
})