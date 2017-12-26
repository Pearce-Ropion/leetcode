var nums = [0,1,0,3,12];
var moveZeroes = function(nums) {
    var pos = nums.indexOf(0);;
    var zeros = 0;
    while(pos != -1) {
        nums.splice(pos,1);
        pos = nums.indexOf(0);
        zeros++;
    }
    for (var i = 0; i < zeros; i++) {
      nums.push(0);
    }
    return nums;
};

console.log(moveZeroes(nums));
