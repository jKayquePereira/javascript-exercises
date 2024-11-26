const add = function(numAdd1, numAdd2) {
  return numAdd1 + numAdd2
};

const subtract = function(numSub1, numSub2) {
  return numSub1 - numSub2
};

const sum = function(...numSum) {
  if (numSum.length === 1 && Array.isArray(numSum[0])) {
    numSum = numSum[0];
  }

  let sumAll = 0

  for (i = 0; i < numSum.length; i++) {
    sumAll += numSum[i]
  }

  return Number(sumAll)
};

const multiply = function(...numMult) {
    if (numMult.length === 1 && Array.isArray(numMult[0])) {
      numMult = numMult[0];
    }

    let MultAll = 1;

    for (let i = 0; i < numMult.length; i++) {
      MultAll *= numMult[i];
    }

    return MultAll;
  };


const power = function(numPower1, numPower2) {
  return numPower1 ** numPower2
};

const factorial = function(numFac) {
  let result = 1

  for (i = numFac; i > 0; i--) {
    result *= i
  }
  return result
};

console.log(sum(7, 11))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
