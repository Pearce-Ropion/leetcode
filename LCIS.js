/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [1,3,5,4,7];
var findLengthOfLCIS = function(nums) {
    var i, j, prev = 0;
    var longest = [];
    for (i = 0; i < nums.length; i++) {
        for (j = i; j < nums.length; j++) {
            if (nums[j] > prev) {
                longest.push(nums[j]);
                prev = nums[j];
            }
            else {
                break;
            }
        }
        prev = nums[i];
    }
    return longest;
};
console.log(findLengthOfLCIS(nums));
