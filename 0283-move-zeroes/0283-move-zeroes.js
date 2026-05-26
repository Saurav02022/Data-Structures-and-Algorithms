/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let index = 0;

    // First put all non-zero numbers at the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    // Fill the remaining positions with zeroes
    while (index < nums.length) {
        nums[index] = 0;
        index++;
    }
};