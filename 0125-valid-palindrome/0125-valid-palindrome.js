/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    // step 1: remove non-alphanumeric + make lowercase
    let newStr = "";

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z') ||
            (ch >= '0' && ch <= '9')
        ) {
            newStr += ch.toLowerCase();
        }
    }

    // step 2: reverse string (your way)
    let backStr = "";

    for (let i = newStr.length - 1; i >= 0; i--) {
        backStr += newStr[i];
    }

    // step 3: compare
    return backStr === newStr;
};