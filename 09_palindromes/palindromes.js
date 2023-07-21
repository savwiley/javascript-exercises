const palindromes = function (str) {
  const caps = str.toUpperCase().replace(/[^A-Z0-9]/g, "");
  return caps === caps.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
