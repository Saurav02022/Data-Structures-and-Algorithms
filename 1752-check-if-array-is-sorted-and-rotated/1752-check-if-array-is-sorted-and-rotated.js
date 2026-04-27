/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let count = 0;
    const n = nums.length;

    let i = 0;

    while (i <= n) {
        let nextIndex = (i + 1) % n;
        if (nums[i] > nums[nextIndex]) {
            count++;
        }
        i++;
    }
    if (count > 1) {
        return false;
    }

    return true;
};