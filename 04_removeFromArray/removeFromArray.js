const removeFromArray = function(array, ...num) {
    return array.filter(element => !num.includes(element))}
;
// Do not edit below this line
module.exports = removeFromArray;