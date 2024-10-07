// The variable name here is up to you since only the value is exported, not the variable.
const print = require('./print.js');
print(`thank goodness I don't need to use console.log anymore!`);
print(`this is so much easier!`);

// Here, we're getting an object with functions inside (a.k.a. "methods")
const circleHelpers = require('./circle-helpers.js');
const radius = 5;
const area = circleHelpers.getArea(radius);

print(`the area of a circle with radius ${radius} is ${area}`);