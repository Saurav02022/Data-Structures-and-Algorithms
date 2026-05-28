/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let keyVal = {};
    let index = 0;

    // Loop through array
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];

        // If number not already stored
        if (keyVal[currentNum] === undefined) {
            keyVal[currentNum] = 1;

            // Put unique value back into nums
            nums[index] = currentNum;

            index++;
        }
    }

    return index;
};