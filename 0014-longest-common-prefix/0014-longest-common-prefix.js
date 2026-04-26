/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let first = strs[0];
    let result = "";

    // prefix length बढ़ाते जाओ
    for (let i = 0; i < first.length; i++) {
        let ch = first[i];

        // हर string में check करो
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== ch) {
                return result;
            }
        }

        result += ch;
    }

    return result;
};