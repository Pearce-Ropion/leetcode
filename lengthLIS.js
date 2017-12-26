var nums = [10, 9, 2, 5, 3, 7, 101, 18];
var nums2 = [10,9,2,5,3,4];
var lengthOfLIS = function(nums) {
    if (!nums) return 0;
    var longest = 0;
    for (var i = 0; i < nums.length; i++) {
        var arr = [];
        var last = Number.MIN_SAFE_INTEGER;
        var start = nums[i];
        arr.push(start);
        var bigNum = Number.MIN_SAFE_INTEGER;
        for (var j = i; j < nums.length; j++) {
            if (start < nums[j] && last < nums[j]) {
                arr.push(nums[j]);
                last = nums[j];
                bigNum = Math.max(bigNum,nums[j]);
            }
        }
        console.log(arr);
        var lastLen = arr.length;
        longest = Math.max(longest,lastLen);
    }
    return longest;
};
console.log(lengthOfLIS(nums2));
