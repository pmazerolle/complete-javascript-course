// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* 
// Section 5.57

const x = 23;

const calcAge = (birthYear) => 2037 - birthYear;

// Section
console.log(calcAge(1991));

// npm install live-server -g
// live-server
*/

// Section 5.59

// Section 5.61
/* 
// Exercise
// smart home thermometer, calculate amplitude of array

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude - difference between highest and lowest
// - How to compute max and min
// - what's a sensor error and what to do?

// 2) Breaking up into sub-problems
// - How to ignore sensor errors
// - Find max value
// - Find min value
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;

        // return max;
    }

    console.log(`Max = ${max}`);
    console.log(`Min = ${min}`);

    const amplitude = max - min;
    return amplitude;
};

const amplitude = calcTempAmplitude([3, 7, 4, "error", 17, -6]);

console.log(amplitude);

// Problem 2
// Function should now receive 2 arrays of temps
// Merge 2 arrays

const newCalcTempAmplitude = function (temps1, temps2) {
    const temps = temps1.concat(temps2);

    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;

        // return max;
    }

    console.log(`Max = ${max}`);
    console.log(`Min = ${min}`);

    const amplitude = max - min;
    return amplitude;
};

const amplitude2 = newCalcTempAmplitude([3, 7, 4, "error", 17, -6], [32, -20]);
console.log(amplitude2);
*/

/* 
// Section 5.63 - Debugging

const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",
        // C) FIX
        // value: Number(prompt("Degrees celsius: ")),
        value: 10,
    };

    // B) FIND
    console.log(measurement);
    console.table(measurement);
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    const kelvin = measurement.value + 273;
    return kelvin;
};

// A) Identify bug
console.log(measureKelvin());

// Using a debugger
const newCalcTempAmplitude = function (temps1, temps2) {
    const temps = temps1.concat(temps2);

    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;

        debugger;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;

        // return max;
    }

    console.log(`Max = ${max}`);
    console.log(`Min = ${min}`);

    const amplitude = max - min;
    return amplitude;
};

const amplitude2 = newCalcTempAmplitude([3, 5, 1], [9, 4, 5]);
console.log(amplitude2);
*/

/* 
// Challenge #1

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
    // const printForecast = function (arr) {
    let forecastStr = "...";
    for (let i = 0; i < arr.length; i++) {
        forecastStr += ` ${arr[i]}C in ${i + 1} days ...`;
    }

    return forecastStr;
}

console.log(printForecast(testData1));
console.log(printForecast(testData2));
*/

// Section 6.68 - Basic HTML Structure and Elements
