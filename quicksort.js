var nums = [10,6,78,46,7,11,974,21];

var sortColors = function(nums) {
    quicksort(nums,0,nums.length-1);
};

function quicksort (nums, start, end) {
    while (start < end) {
        var mid = partition(nums, start, end);
        quicksort(nums, start, mid-1);
        quicksort(nums, mid+1, end);
    }
}
function partition (nums, start, end) {
    var pivot = nums[end];
    var wall = (start-1);
    for (var i = start; i <= end; i++) {
        if (nums[i] <= pivot) {
            wall++;
            swap(nums,wall,i);
        }
        console.log(nums);
    }
    swap(nums,wall+1,end);
    console.log(nums);
    return (wall+1);
}
function swap (array, p, q) {
    var temp = array[p];
    array[p] = array[q];
    array[q] = temp;
}
console.log(nums);
console.log(partition(nums,0,nums.length-1));
//console.log(quicksort(nums,0,nums.length-1));
