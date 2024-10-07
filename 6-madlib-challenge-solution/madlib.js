const madlib = (name, verb, quantity, item, newItem, isHappy) => {
  console.log(`There once was a man named ${name}.`);
  console.log(`Every day he would ${verb} with his ${quantity} ${item}s`);

  if (isHappy) {
    console.log(`But then, he found a ${newItem} and everything changed!`);
  } else {
    console.log(`But then, a ${newItem} took over his life and he couldn't ${verb} again!`);
  }

  console.log("The end.")
}

module.exports = madlib;