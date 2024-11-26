const sumAll = function(numMin, numMax) {

    if (numMin > numMax) {
        let temp = numMin
        numMin = numMax
        numMax = temp
    }

    if (typeof numMin !== "number" || typeof numMax !== "number" || numMin < 0 || !Number.isInteger(numMin) || !Number.isInteger(numMax)) {
        return "ERROR"
    }
    let sum = 0

    for (i = numMin; i <= numMax; i++) {
        sum += i
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
