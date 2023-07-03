const removeFromArray = function(arr, ...args) {
  let array = arr;
  for (arg of args) {
    if (array.includes(arg)) {
      let index = array.indexOf(arg);
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
