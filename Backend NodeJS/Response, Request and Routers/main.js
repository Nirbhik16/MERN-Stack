const express = require('express')
const blog = require('./routes/blogs')
const app = express()
const port = 3000

app.use(express.static("public"));

app.use('/blogs', blog);

app.get('/', (req, res) => {
  console.log("Hey its a get request");
  res.send('Hello World2!')
})

//Post request
app.post('/', (req, res) => {
  console.log("Hey its a post request");
  res.send('Hello World post!')
})

//Put request
app.put('/', (req, res) => {
  console.log("Hey its a put request");
  res.send('Hello World put!')
})

//How to load a html file using api
app.get("/index",(req, res) => {
  console.log("Hey its index");
  res.sendFile('templates/index.html',{root:__dirname})
})

app.get("/api",(req, res) => {
  console.log("Hey json");
  res.json({a:1,b:2,c:3,d:4,name:["harry","jerry"]});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// Get request has a limit of words.