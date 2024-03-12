console.log("Hello I am conditional tutorial");

let age=45;
if(age>18){
    console.log("You can drive");
}
else{
    console.log("You can not drive");
}

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical operators
// Ternary Operators
// Difference between == and ===
// console.log("3"==3);
// console.log("3"===3); // will see both value and type

age=0;
if(age>18){
    console.log("You can drive");
}
else if(age==0){
    console.log("Are you kidding?");
}
else{
    console.log("You can not drive");
}

let a=6;
let b=8;
// Ternary Operator
c = a>b ? (a-b) : (b-a);

console.log(c);