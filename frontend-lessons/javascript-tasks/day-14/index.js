// JavaScript Fundamentals - Day 14: Assignment

// 1. Create a variable named `temperature` and assign it a value.
// 2. Use an `if` statement to check if the `temperature` is greater than 30. Print a message to the console accordingly.
// 3. Extend the previous example with an `else` statement to print a different message if the temperature is not greater than 30.
// 4. Create a variable named `time` and assign it a value representing the current hour (in 24-hour format).
// 5. Use `else if` statements to greet the user based on the time of day (morning, afternoon, evening).
// 6. Create a switch statement for the variable `day`. Print a message based on the day of the week.

let temperature = 37.3

if(temperature > 30){
    console.log("You're burning!");
}else if(temperature < 30){
    console.log("You're freezing!");
}

let time = 22

if(time <= 12 && time >= 1){
    console.log("Good morning!");
}else if(time > 12 && time < 18){
    console.log("Good Afternoon");
}else if(time > 18 && time <= 24){
    console.log("Good Evening!");
}

let day = 1;

switch(day){
    case 1: console.log("Happy Monday!")
        break;
    case 2: console.log("Happy Tuesday!");
        break;
    case 3: console.log("Happy Wednesday!")
        break;
    case 4: console.log("Happy Thursday!")
        break;
    case 5: console.log("Happy Friday!");
        break;
    case 6: console.log("Happy Saturday!")
        break;
    case 7: console.log("Happy Sunday!")
        break;
}