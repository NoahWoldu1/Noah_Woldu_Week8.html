// Variables
let age = 19;
let isStudent = true;


// Check the user's age
if (age >= 18) {
    alert("You are an adult.");
} else {
    alert("You are a minor.");
}


// Check if the user is a student
if (isStudent) {
    alert("You are a student.");
} else {
    alert("You are not a student.");
}


// For loop that counts from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// While loop that counts down from 5 to 1
let count = 5;

while (count >= 1) {
    console.log(count);
    count--;
}


// Function that returns a greeting
function greet(name) {
    return "Hello, " + name + "!";
}

alert(greet("Woldu"));


// Function that doubles a number
function doubleNumber(number) {
    return number * 2;
}

console.log(doubleNumber(5));


// Extra Challenge: display a message multiple times
for (let i = 1; i <= 3; i++) {
    console.log("JavaScript is running!");
}


// Extra Challenge: display only even numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
