let a = prompt("Enter first number");
let b = prompt("Enter second number");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not a number");
}

let sum = parseInt(a) +parseInt(b);

function main(){
    let x = 1;
    try {
        console.log("This sum is", sum*x);
        return true;
    } catch (error) {
        console.log("Error aa gya bhai");
        return false;
    }
    finally{
        console.log("Files are being closed and db connection is being closed");
    }
}

//Finally is used mainly in functions

let c = main();
console.log(c);