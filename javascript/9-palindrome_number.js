/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    const x_str = x.toString()
    const x_rev = x_str.split("").reverse().join("")

    if(x_rev === x_str) return true

    return false
};


console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
