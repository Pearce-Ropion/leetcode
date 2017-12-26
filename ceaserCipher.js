var n = 11
var s = "middle-Outz";
var k = 2;
var res = "";
for (var i = 0; i < n; i++) {
  if (s.charAt(i).match(/\w/g)) {
    var chCode = s.charCodeAt(i)+k;
    if (chCode > 90 && chCode < 97) chCode -= 26;
    else if (chCode > 122) chCode -= 26;
    res+= String.fromCharCode(chCode);
  } else {
    res+=s.charAt(i);
  }
}
console.log(res);
