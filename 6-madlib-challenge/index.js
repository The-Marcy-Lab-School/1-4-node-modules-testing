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

const main = () => {
  const name = 'Ben';
  const verb = 'run';
  const quantity = 50;
  const item = 'dog';
  const newItem = 'new car';
  const isHappy = false;

  madlib(name, verb, quantity, item, newItem, isHappy);
}

main();