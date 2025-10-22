/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Fart";
console.log(firstName);
*/

/* 2.11
let jsIsFun = true;
console.log(jsIsFun);

console.log(typeof true);
console.log(typeof jsIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

jsIsFun = "Yes!";

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
// 2.12
let age = 30;
age = 31; // mutate variable = let

const birthYear = 1991;
// birthYear = 1990; // error - immutable variable = const

// const job; // error - can't declare empty const

var job = "programmer"; // old way of defining variables, shouldn't use
job = "teacher";

// don't need to use let or const, but that creates variable on global scope
 */

/*
// Section 2.13
const now = 2037;
const ageJonas = now - 1991;
console.log(ageJonas);
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Fart";
console.log(firstName + " " + lastName);

// Assignment operator
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // returns boolean
// >, <, >=, <=
console.log(ageSarah == 19);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
// Section 2.14
// Operator precedence
const now = 2037
const ageJonas = now - 1992;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);
// mdn = mozilla developer network

// right to left precedence
let x, y;
x = y = 25 - 10 - 5;

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(averageAge);
*/

/*
// Section 2.14 Assignment
const heightMark = 1.88;
const massMark = 95;
const heightJohn = 1.76;
const massJohn = 85;

const BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/

/* 
// Section 2.17
// String and template literals

const firstName = "Phil";
const job = "dev";
const birthYear = 1988;
const year = 2037;

const phil = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(phil);

// Template literals
const philNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`
console.log(philNew);

// Multi-line String
console.log('String with \n\
    multiple \n\
    lines');

console.log(`String
    multiple
    lines`);
*/

/* 
// Section 2.18
// if/else statements
const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 1988;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/


// Challenge #2 section 2.18
const heightMark = 1.88;
const massMark = 95;
const heightJohn = 1.76;
const massJohn = 85;

const BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

let BMIMessage;

if (markHigherBMI) {
    BMIMessage = `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`;
} else {
    BMIMessage = `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`;
}
console.log(BMIMessage);
