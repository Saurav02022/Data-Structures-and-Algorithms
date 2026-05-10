/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    // We store numbers and their Roman symbols together.
    // Important: order is from biggest to smallest.
    // We also include special cases like 900 = CM, 400 = CD, 90 = XC, etc.
    const romanList = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    // This will store our final Roman answer
    let answer = "";

    // Go through every number-symbol pair
    for (let i = 0; i < romanList.length; i++) {
        let value = romanList[i][0];   // number value, example: 1000
        let symbol = romanList[i][1];  // roman symbol, example: "M"

        // Keep using this Roman symbol while num is big enough
        while (num >= value) {
            answer = answer + symbol;  // add Roman symbol to answer
            num = num - value;         // reduce num by that value
        }
    }

    // Return final Roman numeral
    return answer;
};