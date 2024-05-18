/**
 * 
 * @param n : number
 * @returns number
 * THIS FUNCTION GET THE NEXT NUMBER WIHOUT A CONSECUTIVE DIGIT
 */
function nonConsecutiveDigits(n) {
    let j = n + 1;
    const digits = "" + j;

    for (i = 0; i < digits.length; i++) {
        if (digits[i] == digits[i + 1]) {
            // recursive function
            j=nonConsecutiveDigits(j)
        }
    }
    return j;
}

console.log(nonConsecutiveDigits(44432)); 