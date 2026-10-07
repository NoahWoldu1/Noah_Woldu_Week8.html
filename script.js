// Variables
let age = Number(prompt("Enter your age:"));
let isStudent = confirm("Are you a student?");

// Check if age is 18 or older
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

// For loop: count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While loop: count down from 5 to 1
let count = 5;

while (count >= 1) {
    console.log(count);
    count--;
}

// Greeting function
function greet(name) {
    return "Hello, " + name + "!";
}

let userName = prompt("Enter your name:");
alert(greet(userName));

// Double number function
function doubleNumber(number) {
    return number * 2;
}

console.log(doubleNumber(5));
