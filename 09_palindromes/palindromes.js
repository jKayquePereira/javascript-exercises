const palindromes = function (word) {
    let newWord = word.replace(/[\W_]/g, '').toLowerCase().split(',').join('')

    return newWord === newWord.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
