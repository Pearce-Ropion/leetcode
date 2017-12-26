var addStrings = function(num1, num2) {
    if (!num1 && !num2) return null;
    if (!num1) return num2;
    if (!num2) return num1;

    var x = [], y = [], i;
    for (i = 0; i < num1.length; i++) {
        x[i] = num1.charCodeAt(i) - 48;
    }
    for (i = 0; i < num2.length; i++) {
        y[i] = num2.charCodeAt(i) - 48;
    }
    var carry = 0, sum = 0, m = x.length - 1, n = y.length - 1;
    var result = [];
    var xZeroCheck, yZeroCheck;
    for (i = 0; i < Math.max(x.length,y.length) || carry > 0; i++) {
        sum = carry;
        xZeroCheck = x[m-i] ? x[m-i] : 0;
        yZeroCheck = y[n-i] ? y[n-i] : 0;
        sum += xZeroCheck + yZeroCheck;
        carry = Math.floor(sum / 10);
        sum %= 10;
        result.unshift(sum);
    }
    result = result.join("");
    return result;
};

var multiply = function(num1, num2) {
    if (!num1 && !num2) return null;
    if (!num1) return num2;
    if (!num2) return num1;

    var x = [], y = [], i;
    for (i = 0; i < num1.length; i++) {
        x[i] = num1.charCodeAt(i) - 48;
    }
    for (i = 0; i < num2.length; i++) {
        y[i] = num2.charCodeAt(i) - 48;
    }
    var carry = 0, sum = 0, m = x.length - 1, n = y.length - 1;
    var result = [];
    var xZeroCheck, yZeroCheck, it;
    for (i = 0; i < Math.max(x.length,y.length) || carry > 0; i++) {
        sum = carry;
        xZeroCheck = x[m-i] ? x[m-i] : 0;
        yZeroCheck = y[n-i] ? y[n-i] : 0;
        sum += xZeroCheck + yZeroCheck;
        carry = Math.floor(sum / 10);
        sum %= 10;
        result.unshift(sum);
    }
    result = result.join("");
    return result;
};

var num1 = "9", num2 = "99";
console.log(addStrings(num1,num2));
