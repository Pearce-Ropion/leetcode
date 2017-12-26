var s = "Aabb";
var arr = s.split("").sort();
console.log("Sorted Array: "+arr);
var count = new Array(57).fill(0);
var charArr = [];
for (var i = 0; i < arr.length; i++) {
    console.log("charCodeAt i: "+arr[i].charCodeAt(0));
    count[arr[i].charCodeAt(0) - 65]++;
}
console.log("Count: "+count);
for (var i = 0; i < count.length; i++) {
    for (var j = 0; j < count[i]; j++) {
        charArr.push(String.fromCharCode(i+65));
    }
}
s = charArr.join("");
console.log(s);
