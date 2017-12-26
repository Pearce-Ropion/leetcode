var s = "[{([])([{}])}]";
var isValid = function(s) {
    var stack = [];
    var data;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
            stack.push(s[i]);
        }
        if (s[i] == ")" || s[i] == "]" || s[i] == "}") {
            if (s[i] == ")")
                data = "(";
            else if (s[i] == "]")
                data = "[";
            else if (s[i] == "}")
                data = "{";
            if (data != stack[stack.length-1]) {
                return false;
            } else
                stack.pop();
        }
    }
    if (stack.length !== 0)
        return false;
    return true;
};

console.log(isValid(s));
