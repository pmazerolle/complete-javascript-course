'use strict';

/* 
function calcAge(birthYear) {
	const age = 2026 - birthYear;

	function printAge() {
		let output = `${firstName}, you are ${age}, born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millenial = true;
			const firstName = 'Dick';
			const str = `Oh, and you're a millenial, ${firstName}`;

			console.log(str);
			function add(a, b) {
				return a + b;
			}
		}
		console.log(millenial);
		// console.log(add(2, 3));
	}

	printAge();

	return age;
}

const firstName = 'Fart';
calcAge(1988);
 */

// Hoisting and TDZ
// variables
/* 
console.log(me);
console.log(job);
console.log(year);

var me = 'Fart';
let job = 'ass';
const year = '1998';
 */

// Functions
/* 
console.log(addDecl(2, 3));

function addDecl(a, b) {
	return a + b;
}

var addExpr = function (a, b) {
	return a + b;
};

const addArrow = (a, b) => a + b;
 */

// Example
/* 
if (!numProducts) deleteCart();

// var is undeclared at if
var numProducts = 10;

function deleteCart() {
	console.log('All Products Deleted');
}
 */
/* 
var x = 1;
let y = 2;
const z = 3;
 */

// this Keyword
// Takes value of "owner" of the function in which it's called
// depends on how the function is called, and value only assigned when function is actually called
/* 
const fart = {
	name: 'Fart',
	year: 1998,
	calcAge: function () {
		return 2027 - this.year; // this refers to fart object
	},
};
fart.calcAge();
 */

// The this Keyword
/* 
console.log(this); // window object

const calcAge = function (birthYear) {
	console.log(2027 - birthYear);
	console.log(this);
};

calcAge(1998);

const calcAgeArr = birthYear => {
	console.log(2927 - birthYear);
	console.log(this);
};

calcAgeArr(1998);

const fart = {
	year: 1991,
	calcAge: function () {
		console.log(this);
		console.log(2027 - this.year);
	},
};

fart.calcAge(); // this is fart because fart is calling the method

const mathilda = {
	year: 2017,
};

mathilda.calcAge = fart.calcAge;
mathilda.calcAge(); // Method borrowing - this refers to mathilda

const f = fart.calcAge;

 */

// Regular functions vs arrow functions

const fart = {
	firstName: 'Fart',
	year: 1991,
	calcAge: function () {
		console.log(this);
		console.log(2027 - this.year);

		// Solution 1
		const self = this;
		const isMillenial = function () {
			console.log(self);
			console.log(self.year >= 1981 && self.year <= 1996);
		};
		isMillenial();

		// Solution 2 - Arrow function
		const isMill = () => {
			console.log(this);
			console.log(this.year >= 1991 && this.year <= 1996);
		};
		isMill();
	},
	greet: () => console.log(`Hey ${this.firstName}`),
};

fart.greet();
fart.calcAge();

// arguments keyword - only in regular functions
const addExpr = function (a, b) {
	console.log(arguments);
	return a + b;
};
addExpr(2, 5, 6);

var addArrow = (a, b) => {
	console.log(arguments);
	return a + b;
};
addArrow(2, 5);
