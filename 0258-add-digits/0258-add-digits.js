/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    function sumDigits(n) {
        if (n === 0) {
            return 0;
        }

        let lastDigit = n % 10;
        let remainingNumber = Math.floor(n / 10);

        return lastDigit + sumDigits(remainingNumber);
    }

    if (num < 10) {
        return num;
    }

    let sum = sumDigits(num);
    return addDigits(sum);
};