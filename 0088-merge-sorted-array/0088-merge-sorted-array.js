/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // Step 1:
    // Take only the real elements from nums1
    // Example: nums1 = [1,2,3,0,0,0], m = 3
    // nums1.slice(0, m) gives [1,2,3]
    let validPartOfNums1 = nums1.slice(0, m);

    // Step 2:
    // Merge valid part of nums1 with nums2
    // Then sort numerically in ascending order
    let merged = [...validPartOfNums1, ...nums2].sort((a, b) => a - b);

    // Step 3:
    // Put the merged sorted values back into nums1
    // We do this because LeetCode does not want us to return a new array
    for (let i = 0; i < m + n; i++) {
        nums1[i] = merged[i];
    }
};