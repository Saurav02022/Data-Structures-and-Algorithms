/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    for (let i = nums.length - 1; i >= 1; i--) {
        let swapped = false;

        for (let j = 0; j < i; j++) {
            // Check if left number is odd and right number is even.
            // This is wrong order because even numbers should come first.
            // So we swap them to push odd number towards the end.
            if (nums[j] % 2 !== 0 && nums[j + 1] % 2 === 0) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;

                swapped = true;
            }
        }

        if (swapped === false) {
            break;
        }
    }

    return nums;
};