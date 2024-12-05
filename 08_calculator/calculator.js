const add = function(numAdd1, numAdd2) {
  return numAdd1 + numAdd2
};

const subtract = function(numSub1, numSub2) {
	return numSub1 - numSub2
};

const sum = function(numSum) {
  if (numSum.length === 0) {
    return 0
  }

  return numSum.reduce((total, item) => total + item)
};

const multiply = function(numMult) {
  if (numMult.length === 0) {
    return 0
  }

  return numMult.reduce((total, item) => total * item)
};

const power = function(numPower1, numPower2) {
  return numPower1 ** numPower2
};

const factorial = function(numFac) {
  if (numFac === 0 || numFac === 1) {
    return 1
  }

  for (i = numFac - 1; i >= 1; i--) {
    numFac *= i
  }
  return numFac
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
