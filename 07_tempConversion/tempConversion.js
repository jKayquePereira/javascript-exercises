const convertToCelsius = function(degreeInFah) {
  let fahToCel = (degreeInFah - 32) / 1.8

  return parseFloat(fahToCel.toFixed(1))
};

const convertToFahrenheit = function(degreeInCel) {
  let celToFah = (degreeInCel * 1.8) + 32

  return parseFloat(celToFah.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
