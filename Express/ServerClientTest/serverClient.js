express = require('express')

app = express()
app.get('/', (req, resp)=>{
    // resp.send("you are on home page")
    resp.send(req.query.name)
})


app.get('/contact%20us', (req, resp)=>{
    resp.send("<h1>contact us<h1>")
})
app.listen(8080)