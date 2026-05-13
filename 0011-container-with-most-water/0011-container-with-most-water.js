/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;

    let maxWater = 0;

    while (left < right) {
        // Current container dimensions
        const width = right - left;
        const containerHeight = Math.min(height[left], height[right]);

        // Calculate current area
        const currentArea = width * containerHeight;

        // Update maximum area found so far
        maxWater = Math.max(maxWater, currentArea);

        // Move the pointer with smaller height
        // because it limits the container capacity
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};