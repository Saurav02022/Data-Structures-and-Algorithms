/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let map = {};

    // count frequency
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }

    let sum = 0;

    // add only elements that appear once
    for (let key in map) {
        if (map[key] === 1) {
            sum += Number(key);
        }
    }

    return sum;
};