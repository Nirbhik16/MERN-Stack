let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a+i);
}

let obj = {
    name:"Harry",
    role:"Programmer",
    company:"CodeWithHarry"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element);
}

for (const c of "Nirbhik") {
    console.log(c);
}

// let i=0;
// while (i<6) {
//     console.log(i);
//     i++;
// }

let i=0;
do {
    console.log(i);
    i++;
} while (i<6);