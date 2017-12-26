var s = "ab";
var isPalindrome = function(s) {
    var i, j;
    for (i = 0; i < s.length-1/2; i++){
        i = j;
        console.log(s.charAt(i));
        console.log(s.length-1);
        console.log(s.charAt(s.length-1-j));
        while (s.charAt(i).match(/\W/g) && i < s.length/2) {
            console.log("space detected at pos: "+i);
            i++;
        }
        while (s.charAt(s.length-1-j).match(/\W/g) && j < s.length/2) {
            console.log("space detected at pos: "+s.length-1-j);
            j++;
        }
        console.log(s.charAt(i));
        console.log(s.charAt(s.length-1-j));
        if (s.charAt(i) !== s.charAt(s.length-1-j)) {
            return false;
        }
    }
    return true;
};
console.log(isPalindrome(s));
