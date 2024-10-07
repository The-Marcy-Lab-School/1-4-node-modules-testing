// The variable name here is up to you since only the value is exported, not the variable.
const print = require('./print.js');
print(`thank goodness I don't need to use console.log anymore!`);
print(`this is so much easier!`);

// We can simplify the imports by "destructuring" the imported object
const { getArea, getDiameter, getCircumference } = require('./circle-helpers.js');

const radius = 5;
const area = getArea(radius);
const diameter = getDiameter(radius)
const circumference = getCircumference(radius)
print(`Here are the stats for a circle of radius 5:`)
print(`area: ${area}`)
print(`diameter: ${diameter}`)
print(`circumference: ${circumference}`)