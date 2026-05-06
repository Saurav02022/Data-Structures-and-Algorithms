/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // If needle is empty, return 0
    if (needle.length === 0) {
        return 0;
    }

    // Loop through each position in haystack
    for (let i = 0; i < haystack.length; i++) {

        // Assume match is true
        let found = true;

        // Check each character of needle
        for (let j = 0; j < needle.length; j++) {

            // If characters don't match OR we go out of bounds
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }

        // If full needle matched
        if (found) {
            return i;
        }
    }

    // If not found at all
    return -1;
};