const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let Ankit = "Aooo is a good boy"
    let Trisha = "Tyo0oooooooo"
    let arr = [65,54,32,65,44]
  res.render('index', {Trisha: Trisha, Ankit :Ankit,arr});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})