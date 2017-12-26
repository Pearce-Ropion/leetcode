var s = "abcabcbb";
var lengthOfLongestSubstring = function(s) {
    var sub;
    var iterator = 0;
    var subs = [];
    for (var i = 0; i < s.length; i++) {
        var hash = new Object();
        sub = "";
        while (iterator != s.length) {
            if (hash[s[iterator]] == undefined) {
                hash[s[iterator]]++;
                sub += s[iterator];
            } else {
                break;
            }
            iterator++;
        }
        iterator = i;
        subs.push(sub);
    }
    var len = 0;
    for (var e in subs) {
        len = Math.max(len, subs[e].length);
    }
    return len;
};
var lengthOfLongestSubstring2 = function(s) {
    var hash = new Object();
    var i = 0, j = 0, res = 0;
    var n = s.length;
    while (i < n && j < n) {
        if (!hash.hasOwnProperty(s[j])) {
            hash[s[j++]] = 0;
            res = Math.max(res, j - i);
        } else {
            delete hash[s[i++]];
        }
    }
    return res;
};

console.log(lengthOfLongestSubstring(s));
console.log(lengthOfLongestSubstring2(s));
