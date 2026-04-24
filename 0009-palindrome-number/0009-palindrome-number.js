var isPalindrome = function (x) {

    // step 1: negative numbers are not palindrome
    if (x < 0) return false;

    // step 2: convert to string
    let str = x.toString();

    // step 3: reverse string
    let revStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }

    // step 4: compare
    return str === revStr;
};