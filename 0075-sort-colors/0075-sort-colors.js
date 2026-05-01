/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let i = 0; i <= nums.length - 2; i++) {
        let minIndex = i;

        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = nums[minIndex];
            nums[minIndex] = nums[i];
            nums[i] = temp;
        }
    }
    return nums;
};