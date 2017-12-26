var maxSubArray = function(nums) {
    if (nums.length == 1) return nums[0];
    var largest = nums[0], almostLargest = nums[0];
    for (var i = 1; i < nums.length; i++) {
        almostLargest = Math.max(almostLargest + nums[i], nums[i]);
        largest = Math.max(largest,almostLargest);
        console.log("nums[i]: "+nums[i]+" - a: "+almostLargest+" - b: "+largest+"\n");
    }
    return largest;
};
var nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
