/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++) {
        const rem = target - nums[i]

        for(let j=(i+1); j<nums.length; j++) {
            if (rem === nums[j]) {
                return [i, j]
            }
        }
    }
};


console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))
