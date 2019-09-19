const express = require('express')
const app = express()
const path = require('path')


app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req,res)=>{
    res.send("<h1>Hello World!</h1>")
})

app.get('/name', (req,res)=>{
    res.send({name: "Geo", age: 25})
})

console.log(__dirname)

app.listen(3001, ()=>{
    console.log('listening on port 3001')
})