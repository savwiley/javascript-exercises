const findTheOldest = function(arr) {
  let newArr = [];
  arr.forEach(person => {
    let death = person.yearOfDeath;
    if (!death) {
      death = new Date().getFullYear();
    }
    newArr.push(death - person.yearOfBirth);
  });
  let index = newArr.indexOf(Math.max(...newArr));
  return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;

//npm test findTheOldest.spec.js