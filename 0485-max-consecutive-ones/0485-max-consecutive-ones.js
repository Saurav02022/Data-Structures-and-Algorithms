/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    // Tracks current continuous sequence of 1s
    let currentStreak = 0;

    // Stores the maximum streak found so far
    let maxStreak = 0;

    // Traverse through the array
    for (const num of nums) {
        // If current number is 1,
        // continue the streak
        if (num === 1) {
            currentStreak++;

            // Update maximum streak if needed
            maxStreak = Math.max(maxStreak, currentStreak);
        } else {
            // If we hit 0,
            // streak breaks and resets
            currentStreak = 0;
        }
    }

    return maxStreak;
};