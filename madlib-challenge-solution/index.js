const madlib = require('./madlib.js');
const prompt = require('prompt-sync')();

const main = () => {
  const name = prompt('Choose a name: ')
  const verb = prompt('Choose a verb: ')
  const quantity = prompt('Choose a quantity: ')
  const item = prompt('Choose a item: ')
  const newItem = prompt('Choose a newItem: ')
  const isHappyResponse = prompt('Choose whether the story is happy. Y or N: ')
  const isHappy = isHappyResponse.toUpperCase() === "Y"

  madlib(name, verb, quantity, item, newItem, isHappy);
}

main();