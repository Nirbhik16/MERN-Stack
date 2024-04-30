const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

// app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/about', (req, res) => {
res.send('Hello how about you!')
})

app.get('/contact', (req, res) => {
res.send('Hello contact me!')
})

app.get('/blog/:slug/:second', (req, res) => {
    //logic to intro to js from the db

    // Reference URL used: http://localhost:3000/blog/harry/world?mode=dark&pizza=dominos
    console.log(req);
    console.log(req.params); // Output: params: { slug: 'harry', second: 'world' }

    console.log(req.query); // Query: { mode: 'dark', pizza: 'dominos' }

    res.send(`Hello ${req.params.slug} and ${req.params.second}!`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     //logic to intro to js from the db
//     res.send('Hello Javascript!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     //logic to intro to python from the db
//     res.send('Hello Python!')
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})