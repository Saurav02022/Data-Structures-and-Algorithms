/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const S = s.trim().split(" ");


    let newStr = "";

    for (let i = S.length - 1; i >= 0; i--) {
        if (S[i] === "") {
            continue;
        }

        if (newStr === "") {
            newStr += S[i];
        } else {
            newStr += " " + S[i];
        }
    }

    return newStr

};