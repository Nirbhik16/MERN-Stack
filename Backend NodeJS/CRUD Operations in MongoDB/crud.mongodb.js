//Crud Operation
use("CurdDb");





//CREATE
// db.createCollection("courses");
// db.courses.insertOne({
//     name:"Harrys web dev free course",
//     price:0,
//     assignment:12,
//     projects:45
// })

// db.courses.insertMany([
//     {
//         "name": "Complete Python Bootcamp",
//         "price": 50,
//         "assignment": 15,
//         "projects": 10
//     },
//     {
//         "name": "JavaScript Essentials",
//         "price": 30,
//         "assignment": 20,
//         "projects": 25
//     },
//     {
//         "name": "Data Science with R",
//         "price": 100,
//         "assignment": 25,
//         "projects": 30
//     },
//     {
//         "name": "Intro to Machine Learning",
//         "price": 75,
//         "assignment": 18,
//         "projects": 12
//     },
//     {
//         "name": "Full Stack Web Development",
//         "price": 120,
//         "assignment": 40,
//         "projects": 50
//     },
//     {
//         "name": "React for Beginners",
//         "price": 45,
//         "assignment": 10,
//         "projects": 15
//     },
//     {
//         "name": "Advanced CSS and Sass",
//         "price": 35,
//         "assignment": 8,
//         "projects": 5
//     },
//     {
//         "name": "Android Development with Kotlin",
//         "price": 90,
//         "assignment": 22,
//         "projects": 18
//     },
//     {
//         "name": "iOS Development with Swift",
//         "price": 95,
//         "assignment": 24,
//         "projects": 20
//     },
//     {
//         "name": "Cyber Security Fundamentals",
//         "price": 80,
//         "assignment": 30,
//         "projects": 35
//     }
// ])






//READ
// let a = db.courses.find({price:50});
// console.log(a);
// console.log(a.count());
// console.log(a.toArray());


// let a = db.courses.findOne({price:50});
// console.log(a);




//UPDATE
// db.courses.updateOne({price:50},{$set:{price:100}});




//DELETE
db.courses.deleteMany({price:100});
