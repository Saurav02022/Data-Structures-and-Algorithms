/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // Step 1: Count frequencies using a plain object
    const freqMap = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (freqMap[num] === undefined) {
            freqMap[num] = 1; // First time seeing this number
        } else {
            freqMap[num] += 1; // Increase count
        }
    }

    const result = [];

    // Step 2: Loop k times to get the top k numbers
    for (let i = 0; i < k; i++) {
        let maxFreq = -1;
        let mostFrequentNum = null;

        // Scan our object to find the number with the highest count
        for (const num in freqMap) {
            if (freqMap[num] > maxFreq) {
                maxFreq = freqMap[num];
                mostFrequentNum = num;
            }
        }

        // Add the top number to our result array
        // We use Number() because object keys in JS are treated as strings
        result.push(Number(mostFrequentNum));

        // Delete it from our object so we don't pick it again
        delete freqMap[mostFrequentNum];
    }

    return result;
};