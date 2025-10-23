
// Section 3.33
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive");

// const interface = 'Audio';
// const private = 54;
*/

/*
// Section 3.34 - Functions
function logger() {
    console.log("My name is fart");
}

logger(); // calling, running, invoking function

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
*/

// Section 3.35 - Function Declarations vs Expressions
// Declaration - can be defined later than it is called
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1988);

console.log(age1);

// Expression - must be initialized before use
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1988);

console.log(age1, age2);


