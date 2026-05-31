/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const n = nums.length;
    const majorityCount = Math.floor(n) / 2;
    let occur = {};

    for (let i = 0; i < n; i++) {
        const currentNumber = nums[i];

        if (occur[currentNumber] === undefined) {
            occur[currentNumber] = 1;
        } else {
            const updatedCount = occur[currentNumber] + 1;
            occur[currentNumber] = updatedCount;
        }
        if (occur[currentNumber] >= majorityCount) {
            return currentNumber;
        }
    }
    return -1;
};