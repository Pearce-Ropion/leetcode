var nums = [1,1,1];
var removeDuplicates = function(nums) {
    var freq = new Object();
    for (var i = 0; i < nums.length; i++) {
        if (freq[nums[i]] == undefined)
            freq[nums[i]] = 0;
        freq[nums[i]]++;
    }
    for (var i in freq) {
        var pos = nums.indexOf(parseInt(i));
        var count = freq[i] - 1;
        nums.splice(pos, count);
    }
    return nums.length;
};
console.log(removeDuplicates(nums));
