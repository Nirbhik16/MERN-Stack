const fs = require("fs");

console.log(fs);

console.log("Starting");
// fs.writeFileSync("harry.txt","Harry is a good boy");

//Asynchronous
fs.writeFile("harry2.txt","Harry is a good boy",()=>{
    console.log("done");
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString());
    })
})

fs.appendFile("harry.txt","Nirbhik",(e,d)=>{
    console.log(e,d);
    console.log("Done2");
})
console.log("Ending");