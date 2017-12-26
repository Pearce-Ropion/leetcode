var num = "10200";
var k = 1;
var removeKdigits = function(num, k) {
    if (num.length == k)
        return "0";
    var stack = [];
    var i = 0;
    while (i < num.length) {
        while (k > 0 && stack.length !== 0 && stack[stack.length-1] > num[i]) {
            stack.pop();
            k--;
        }
        stack.push(num[i]);
        i++;
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    var arr = [];
    while (stack.length !== 0) {
        arr.push(stack.pop());
    }
    arr.reverse();
    while (arr.length > 1 && arr[0] === "0") {
        arr.splice(0, 1);
    }
    return arr.join('');
};

console.log(removeKdigits(num, k));
