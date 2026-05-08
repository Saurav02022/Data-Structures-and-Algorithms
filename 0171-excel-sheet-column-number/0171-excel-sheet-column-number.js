/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {

    let result = 0;

    // Go through each letter one by one
    for (let i = 0; i < columnTitle.length; i++) {

        // Get current character
        let ch = columnTitle[i];

        // Convert letter to number
        // A = 1, B = 2, ..., Z = 26
        let value = ch.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

        // Multiply previous result by 26
        // then add current value
        result = result * 26 + value;
    }

    return result;
};