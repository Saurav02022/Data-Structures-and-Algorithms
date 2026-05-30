/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let nums1Obj = {};
    let nums2Obj = {};

    for (let i = 0; i < nums1.length; i++) {
        const currentNum = nums1[i];

        if (nums1Obj[currentNum] === undefined) {
            nums1Obj[currentNum] = 1;
        } else {
            nums1Obj[currentNum] = nums1Obj[currentNum] + 1;
        }
    }

    for (let j = 0; j < nums2.length; j++) {
        const currentNum = nums2[j];

        if (nums2Obj[currentNum] === undefined) {
            nums2Obj[currentNum] = 1;
        } else {
            nums2Obj[currentNum] = nums2Obj[currentNum] + 1;
        }
    }

    let result = [];

    for (let key in nums1Obj) {
        if (nums2Obj[key] !== undefined) {
            const count = Math.min(nums1Obj[key], nums2Obj[key]);

            for (let i = 0; i < count; i++) {
                result.push(Number(key));
            }
        }
    }

    return result
};