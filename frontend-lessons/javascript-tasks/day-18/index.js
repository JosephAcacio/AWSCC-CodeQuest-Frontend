// Working with Objects in JavaScript - Day 18: Assignment

// Task 1: Object Basics

// 1. Create an empty object named `book`.
// 2. Add properties to the `book` object for `title`, `author`, and `year` with appropriate values.
// 3. Access and print the `author` property of the `book` object.

// Task 2: Object Operations

// 4. Create an object named `student` with properties for `name`, `age`, and `grade`.
// 5. Modify the `age` property of the `student` object to a different value.
// 6. Add a new property named `subjects` to the `student` object, which should be an array of at least three subjects.

// Task 3: Object Methods

// 7. Create an object named `rectangle` with properties for `width` and `height`.
// 8. Add a method named `calculateArea` to the `rectangle` object that returns the area of the rectangle.
// 9. Invoke the `calculateArea` method and store the result in a variable, then print it to the console.

// Task 4: Advanced Object Techniques

// 10. Create an object named `person` with properties for `name`, `age`, and `address`.
// 11. Use the `delete` keyword to remove the `address` property from the `person` object.
// 12. Create another object named `employee` with properties for `name` and `position`. Combine the `person` and `employee` objects into a new object named `employeeDetails`.

// These tasks will enhance your understanding of working with objects in JavaScript. Objects are versatile and allow you to structure data in a meaningful way. Best of luck! 🌟


//Task1
let book = {
    title: 'Hunger Games',
    author: 'Suzanne Collins',
    year: 2013,
};
console.log(`The author of the ${book.title} year ${book.year} is ${book.author}`);

//Task2
let student = {
    name: 'Joseph Acacio',
    age: 17,
    grade: 1.00,
}

student.age = 18;
student.subjects = ['MMW', 'FPK', 'PurComm'];

//Task3
let rectangle = {
    width: 10,
    lenght: 18,
    calculateArea: function(){
       return rectangle.width * rectangle.lenght;
    },
}

let rectangleArea = rectangle.calculateArea();
console.log(rectangleArea);

//Task4
let person = {
    name: 'Joseph Acacio',
    age: 18,
    address: 'Address ng Bayan',
}

delete person.address;
console.log(person);

let employee = {
    name: 'Marina',
    position: 'UK Drag Race Winnah'
}

let employeeDetails = Object.assign({}, person, employee);

console.log(employeeDetails);

