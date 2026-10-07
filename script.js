// Variables
let age = Number(prompt("Enter your age:"));
let isStudent = confirm("Are you a student?");

// Conditional statements
if (age >= 18) {
    alert("You are an adult.");
} else {
    alert("You are a minor.");
}

if (isStudent) {
    alert("You are a student.");
} else {
    alert("You are not a student.");
}

// For loop - counts from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While loop - counts down from 5 to 1
let count = 5;

while (count >= 1) {
    console.log(count);
    count--;
}

// Greeting function
function greet(name) {
    return "Hello, " + name + "!";
}

alert(greet("Noah"));

// Double number function
function doubleNumber(number) {
    return number * 2;
}

console.log(doubleNumber(5));
