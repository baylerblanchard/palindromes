const palindromes = function (string) {
    let reverseString = string.toLowerCase().split('').reverse().join('').replace(/[^a-zA-Z0-9]/g, '');
    let originalString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return reverseString === originalString;
};

// Do not edit below this line
module.exports = palindromes;
