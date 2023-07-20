const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let initial = 0;
	return arr.reduce((accumulator, current) => accumulator + current, initial);
};

const multiply = function(...numbs) {
  let total;
  for (let i = 0; i < numbs.length; i++) {
    !total ? total = numbs[i] : total *= numbs[i];
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(numb) {
	let newNumb;
  if (numb === 0) {
    return 1;
  } else {
    for (let i = 1; i <= numb; i++) {
      !newNumb ? newNumb = i : newNumb *= i;
    }
    return newNumb;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
