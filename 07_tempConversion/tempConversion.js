const convertToCelsius = function(F) {
  //(32°F − 32) × 5/9 = 0°C
  let celsius = (F - 32) * 5/9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(C) {
  //(0°C × 9/5) + 32 = 32°F
  let fahrenheit = (C * 9/5) + 32;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
