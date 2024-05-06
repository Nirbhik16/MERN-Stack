const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");
app.use(express.static("public"));

const birds = require('./routers/blog.js')

// ...

app.use('/birds', birds)

//Writing Middlewares

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    req.nirbhik = "I am nirbhik";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method} \n`);
    console.log(`${Date.now()} is a ${req.method} \n`);
    console.log('m1');
    next()
})


// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.nirbhik);
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})