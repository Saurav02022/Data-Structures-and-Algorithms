var secondHighest = function (s) {
    let firstLargest = -1;
    let secondLargest = -1;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Skip lowercase letters
        if (char < '0' || char > '9') {
            continue;
        }

        // Convert digit character to number
        const currentDigit = Number(char);

        // Case 1: current digit is bigger than largest
        if (currentDigit > firstLargest) {
            secondLargest = firstLargest;   // old largest becomes second largest
            firstLargest = currentDigit;    // new digit becomes largest
        }

        // Case 2: current digit is smaller than largest,
        // but bigger than second largest
        else if (
            currentDigit < firstLargest &&
            currentDigit > secondLargest
        ) {
            secondLargest = currentDigit;
        }
    }

    return secondLargest;
};