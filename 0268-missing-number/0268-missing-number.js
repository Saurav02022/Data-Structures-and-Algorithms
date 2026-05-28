/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length;

    let tempNums = [];

    for (let i = 0; i <= n; i++) {
        tempNums.push(i);
    }

    nums.sort((a, b) => a - b);

    for (let j = 0; j < tempNums.length; j++) {
        if (tempNums[j] !== nums[j]) {
            return tempNums[j];
        }
    }
};