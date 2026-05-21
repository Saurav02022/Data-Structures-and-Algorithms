/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length

    function reverse(nums, start, end) {

        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start++
            end--
        }
    }

    nums.reverse()

    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1)
};