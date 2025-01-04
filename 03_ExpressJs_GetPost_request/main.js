const express = require('express')
const app = express()
const port = 3000

app.use(express.static("Public"))

app.get('/Hello', (req, res) => {
  res.send('Hello World Ji!')
})

app.get('/About', (req, res) => {
  res.send('Hello About Us!')
})

app.get('/Contact', (req, res) => {
  res.send('Hello Contacts!')
})

app.get('/Blog/:slug/:second', (req, res) => {
  console.log(req.query) 
  console.log(req.params)
  res.send(`Hello ${req.params.slug} and Bye Bye ${req.params.second}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})