/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;

    // Loop 1: Pick the starting point
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;

        // Loop 2: Keep adding numbers as you move the ending point
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j]; // Optimization: Add next number directly

            // Check if the running sum matches k
            if (currentSum === k) {
                count++;
            }
        }
    }

    return count;
};