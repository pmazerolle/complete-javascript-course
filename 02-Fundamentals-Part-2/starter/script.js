
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

/*
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
*/

/*
// Section 3.36 - Arrow functions
const calcAge = birthYear => 2037 - birthYear;

const age = calcAge(1988);
console.log(age);

const yearsToRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsToRetirement(1988, "butt"));
*/

/*
// Section 3.37 - Functions calling other functions

function cutFruit(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruit(apples);
    const orangePieces = cutFruit(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/


// Section 3.38 - Reviewing functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsToRetirement = function (birthYear, firstName) {
    const retirement = 65 - calcAge(birthYear);

    if (retirement > 0) {
        console.log(`${firstName} can retire in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} is already retired`);
        return -1;
    }
}

console.log(yearsToRetirement(1932, "Butt"));