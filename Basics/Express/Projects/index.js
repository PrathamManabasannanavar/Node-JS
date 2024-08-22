const express = require('express')
const data = require('./MOCK_DATA.json') //already JS object

// console.log(data[0].first_name);
const app = express()

//methods
app.get('/api/users', (request, response)=>{
   return response.json(data)
})

app.get('/users', (request, response)=>{
    let html = `<ul>`
    for (const user of data) {
        html += `<li>${user.first_name}</li>`
        console.log(user.first_name);
    }
    html+=`</ul>`;
    response.send(html)
})

app.get('/users/:id', (req, resp)=>{
    const id = req.params.id;
    for (const user of data) {
        if(user.id == id){
            return resp.json(user);
        }
    }
    // user = data.find(user=>user.id == id)  //returns only first occurence of the id
    // return resp.json(user)
    resp.send('user not found')
})

app.post('/api/users/', (req, resp)=>{
    return resp.send({
        "status": "waiting"
    })
})

app.patch('/api/users/', (req, resp)=>{
    resp.json('[{"status":"pending"}]')
})

app.route("/api/users") //routing
.put(()=>{})
.delete(()=>{})

app.listen(8080, ()=>{
    console.log("Listening..");
})