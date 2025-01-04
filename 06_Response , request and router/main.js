const express = require('express')
const app = express()
const port = 3000

app.use(express.static("Public"))

app.get('/', (req, res) => {
  res.send('Hello Post !')
})

app.post('/index', (req, res) => {
  console.log("Post Reequest has been done")
  res.send('Hello Put!!!')
})
app.put('/', (req, res) => {
  console.log("Put Reequest has been done")
  res.send('Hello Put !')
})

app.get("/index", (req,res)=>{
  res.sendFile("/Template/index.html", {root:__dirname})
  console.log("It's a Get Request")
})
app.get("/api", (req,res)=>{
res.json({a:1, b:2 , c:3 , d:4})})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
