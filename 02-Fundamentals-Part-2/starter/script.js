
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

/*
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
*/

/*
// Exercise 5 Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
    let winner;
    if (avgDolphins >= avgKoalas * 2) {
        winner = "Dolphins";
    } else if (avgKoalas >= avgDolphins * 2) {
        winner = "Koalas";
    } else {
        winner = "none";
    }

    console.log(winner !== "none" ? `${winner} win (${avgDolphins} vs. ${avgKoalas})` : "No team wins...");
    return winner;

}

checkWinner(scoreDolphins, scoreKoalas);
*/

/*
// Section 3.40 - Arrays
const friends = ['Michael', 'Steven', 'Peter']; // literal syntax
console.log(friends);

// const years = new Array(1991, 1992, 1993);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; // mutate

const jonas = ['Jonas', 'Fart', 2037 - 1991, friends];
console.log(jonas);

const calcAge = birthYear => 2037 - birthYear;

const years = [1990, 1957, 2002];

for (let i = 0; i < years.length; i++) {
    console.log(calcAge(years[i]));
}
*/

/*
// Section 2.41 - Basic array operations (methods)

const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay'); // Method - Add value to array
const newLength = friends.push('Jay');

console.log(friends);
console.log(newLength);

friends.unshift('John'); // Adds to start

const popped = friends.pop(); // Remove Last element
console.log(popped);

const shift = friends.shift();
console.log(shift);
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('John')); // Boolean
*/

/*
// Section 3.41 Exercise

function calcTip(bill) {
    const tip = bill * (bill >= 50 && bill <= 300 ? 0.15 : 0.2);

    return tip;
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log(tips);
console.log(totals);
*/

/*
// Section 3.43 - Objects

// Object literal syntax
const jonas = {
    firstName: "Jonas",
    lastName: "Fart",
    age: 2037 - 1991,
    job: "dork",
    friends: ['Michael', 'Peter', 'Steven']
};


// Section 3.44 - Dot vs. Bracket Notation
console.log(jonas.lastName);
console.log(jonas['lastName']); // Bracket can be used for any expression

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interest = prompt("What do you want to know about Jonas?");

// console.log(jonas[interest]);

jonas.location = 'Portugal';

if (jonas[interest]) {
    console.log(jonas[interest]);
} else {
    console.log("Wrong request");
}

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

/*
// Section 3.45 - Object Methods

const jonas = {
    firstName: "Jonas",
    lastName: "Fart",
    birthYear: 1991,
    job: "dork",
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
        return this.summary;
    }
};

console.log(jonas.calcAge());
console.log(jonas['calcAge'](1991));

console.log(jonas.getSummary());
 */

/*
// Section 3.34 CHALLENGE #3
const mark = {
    fullName: "Mark",
    mass: "78",
    height: "1.69",

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: "John",
    mass: "92",
    height: "1.95",

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};


console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is ${john.calcBMI() > mark.calcBMI() ? "higher" : "lower"} than ${mark.fullName}'s (${mark.calcBMI()}!)`);
*/

/* 
// Section 3.47 - Iteration: For Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/
/* 
// Section 3.48 - Looping arrays, breaking and continuing
const jonasArray = [
    'Jonas',
    'Fart',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i]);

    // types[i] = (typeof jonasArray[i]);
    types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let j = 0; j < years.length; j++) {
    ages.push(2037 - years[j]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    types.push(typeof jonasArray[i]);
}
console.log(types);

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i]);
}
*/

/* 
// Section 3.49 - Looping backwards

const jonasArray = [
    'Jonas',
    'Fart',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Rep ${rep}`);
    }
}
*/

/* 
// Section 3.50 - While loop

let rep = 1;
while (rep <= 10) {
    console.log(`Rep ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`);
}
*/


// Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);


// Optional challenge

const calcAverage = function (arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(calcAverage(totals));
console.log(calcAverage([2, 3, 7]));