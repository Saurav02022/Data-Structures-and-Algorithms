/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

    function helper(i) {
        // base case
        if (i >= Math.floor(s.length / 2)) return;

        // swap
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;

        // recurse
        helper(i + 1);
    }

    helper(0);
};