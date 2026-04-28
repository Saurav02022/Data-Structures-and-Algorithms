/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    let digits = String(n);
    let symbol = 1;   // +1 means plus, -1 means minus
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]) * symbol;
        symbol *= -1; // flip sign
    }

    return sum;

};