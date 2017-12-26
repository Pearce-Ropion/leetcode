var haystack = "this is a simple string";
var needle = "simple";

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

console.log(strStr(haystack, needle));
