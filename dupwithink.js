//var k = 3, arr = [1, 2, 3, 4, 1, 2, 3, 4];
var k = 3, arr = [1, 2, 3, 1, 4, 5];
// var k = 3, arr = [1, 2, 3, 4, 5];
// var k = 3, arr = [1, 2, 3, 4, 4];

var duplicateWithinKElements = function(nums, k) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = 1; j <= k; j++) {
      if (nums[i] == nums[i+j])
        return true;
    }
  }
  return false;
}
var duplicateWithinKElements2 = function(nums, k) {
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    if (hash.hasOwnProperty(nums[i]))
      return true;
    else {
      hash[nums[i]] = null;
      if (i >= k)
        delete hash[nums[i-k]];
    }
  }
  return false;
}

//console.log(duplicateWithinKElements(arr,k));
console.log(duplicateWithinKElements2(arr,k));
