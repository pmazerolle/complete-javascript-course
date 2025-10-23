
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


