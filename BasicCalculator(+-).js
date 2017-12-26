var s = "1 + 1";
var calculate = function(s) {
  var exp = s.split("");
  var pos;
  var s1 = [];
  while(pos = exp.indexOf(" ") >= 0) {
    exp.splice(pos, 1);
  }

};
console.log(calculate(s));
