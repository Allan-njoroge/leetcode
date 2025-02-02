/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let result = 0

    for(let i=0; i<s.length; i++) {
        let current = romans[s[i]]
        let next = romans[s[i+1]]

        if(current < next) {
            result -= current
        } else {
            result += current
        }
    }
    return result
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
