import path from "path";
let myPath = "\\Users\\nirbhikkakkar\\Documents\\GitHub\\MERN-Stack\\Backend NodeJS\\Working with files : fs and path Modules\\harry.txt";
console.log(path.extname(myPath));

console.log(path.dirname(myPath));
console.log(path.basename(myPath));

console.log(path.join("c:/","programs\\harry.txt"));