/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let seen = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        // If num is already seen, duplicate exists
        if (seen[num] === true) {
            return true;
        }

        // Mark num as seen
        seen[num] = true;
    }

    return false;

};