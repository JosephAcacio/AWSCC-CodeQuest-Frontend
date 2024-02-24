// JavaScript Fundamentals - Day 15: Assignment

// 1. Use a `for` loop to count from 1 to 5 and print each number to the console.
// 2. Create an array named `cookies` with different types of cookies (strings).
// 3. Use a `for` loop to iterate over the `cookies` array and print each type of cookie to the console.
// 4.  Create a variable named `jarNotEmpty` and set it to `true`.
// 5.  Use a `while` loop to simulate eating cookies while the jar is not empty.

for(let i = 1; i <= 5; i++){
    console.log(`Number: ${i}`);
}

console.log()

const cookies = ["Sugar Cookies", "Butter Cookies", "Almond Cookies", "Chocolate Cookies", "Vanilla Cookies"];

for(let i = 0; i <  cookies.length; i++){
    console.log(`Cookie Type: ${cookies[i]}`);
}

console.log()

let jarNotEmpty = true;
let i = 0;

while(jarNotEmpty){
    console.log(`Eating ${cookies[i]}`)

    if(i >= cookies.length-1) {
        jarNotEmpty = false;
        console.log("The jas is already empty");
    }

    i++
}