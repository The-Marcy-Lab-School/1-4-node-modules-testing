// TODO: Refactor this file to use imports

// functions for circle stuff
const LAZY_PI = 3.14;

const getArea = (radius) => {
  return LAZY_PI * radius * radius;
}

const getDiameter = (radius) => {
  return radius * 2;
}

const getCircumference = (radius) => {
  return LAZY_PI * radius * 2;
}

// Helper function for printing stuff. 
// It is a "wrapper" for the console.log function
const print = (input) => {
  console.log(input);
}

// The main function just runs all of the other functions
const main = () => {
  const radius = 5;
  const area = getArea(radius);
  print(`the area of a circle with radius ${radius} is ${area}`);

  const diameter = getDiameter(radius);
  print(`the diameter of a circle with radius ${radius} is ${diameter}`);

  const circumference = getCircumference(radius);
  print(`the circumference of a circle with radius ${radius} is ${circumference}`);
}

main();