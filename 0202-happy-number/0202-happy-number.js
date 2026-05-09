/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    // loop forever until we return true or false
    while (true) {

        let sum = 0;
        let temp = n;

        // calculate sum of square of digits
        while (temp > 0) {

            let digit = temp % 10; // get last digit

            sum = sum + (digit * digit);

            temp = Math.floor(temp / 10); // remove last digit
        }

        // if sum becomes 1, it is happy
        if (sum === 1) {
            return true;
        }

        // unhappy numbers always end in 4 loop
        if (sum === 4) {
            return false;
        }

        // continue with new number
        n = sum;
    }
};