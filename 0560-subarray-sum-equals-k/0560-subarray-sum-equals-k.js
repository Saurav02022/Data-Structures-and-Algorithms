/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;

    // 1. Pick the starting point of the subarray
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;

        // 2. Pick the ending point and add numbers as you go
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];

            // 3. If the sum matches k, increase our count
            if (currentSum === k) {
                count++;
            }
        }
    }

    return count;
};