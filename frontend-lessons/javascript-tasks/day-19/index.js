// Working with JSON in JavaScript - Day 19: Assignment

// Task 1: JavaScript to JSON

// 1. Create a JavaScript object named `product` with properties for `name`, `price`, and `quantity`.
// 2. Use the `JSON.stringify()` method to convert the `product` object into a JSON string.
// 3. Print the resulting JSON string to the console.

// Task 2: JSON to JavaScript

// 4. Create a JSON string representing a book with properties for `title`, `author`, and `publishedYear`.
// 5. Use the `JSON.parse()` method to convert the JSON string into a JavaScript object.
// 6. Access and print the `author` property of the resulting JavaScript object.

// Task 3: Advanced JSON Operations

// 7. Create an array of objects, each representing a person with properties for `name`, `age`, and `city`.
// 8. Use `JSON.stringify()` to convert the array of objects into a JSON string.
// 9. Use `JSON.parse()` to convert the JSON string back into an array of objects.
// 10. Print the `name` and `city` of each person in the array to the console.

//task1
let product = {
    name: "Talong",
    price: "200",
    quantity: 1,
}

let jsonProduct = JSON.stringify(product);
console.log(jsonProduct);

//task2
let book = '{"title": "Hunger Games", "author": "Suzanne Collins", "publishedYear": 2013}'

let parsedBook = JSON.parse(book);
console.log(parsedBook.author);

//task3

let people = [
    personOne = {
        name: "Joseph",
        age: 18,
        city: "Caloocan",
    },
    personTwo = {
        name: "Timothy",
        age: 13,
        city: "Manila",
    },
    personThree = {
        name: "Jomar",
        age: 48,
        city: "Pangasinan",
    },
    personFour = {
        name: "Joy",
        age: 45,
        city: "Davao",
    },
]

let jsonPeople = JSON.stringify(people);
console.log(jsonPeople)

let jsPeople = JSON.parse(jsonPeople);
console.log(jsPeople);

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
    console.log(`${people[i].city} \n`);
}