var matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]];

var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    var lo = 0, hi = m * n - 1;
    var mid;
    while (lo < hi) {
        mid = Math.floor((hi+lo)/2);
        console.log("mid "+mid);
        var thingy = matrix[Math.floor(mid/2)][mid%2];
        if (target == thingy) {
            return true;
        } else if (target < thingy) {
            hi = mid - 1;
            console.log("hi "+hi);
        } else if (target > thingy) {
            lo = mid + 1;
        }
    }
    return false;
};
console.log(searchMatrix(matrix, 3));
