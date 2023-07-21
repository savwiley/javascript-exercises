const fibonacci = function(numb) {
  let a = 0;
  let b = 1;
  let c = 1;
  if (numb < 1) {
    return "OOPS";
  } else {
    for (let i = 1; i < numb; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }
};

// Do not edit below this line
module.exports = fibonacci;

/**
 * c = 1
 * a = 1
 * b = 1
 * 
 * c = 2
 * a = 1
 * b = 2
 * 
 * c = 3
 * a = 2
 * b = 3
 * 
 * c = 5
 */