const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

//Middleware 
app.use((req,res,next)=>{
fs.appendFileSync("Time.txt",`${Date.now()} is a ${req.method}\n` )
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})
app.use((req,res,next)=>{
    console.log("hello 2")
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World3232!')
})
app.post('/', (req, res) => {
  res.send('Hello World3!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})