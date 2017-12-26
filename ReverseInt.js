var x = 21;
if (x < 0) {
  var string = x.toString().split("").reverse().join("");
} else {
  x *= -1;
  var string = "-" + x.toString().split("").reverse().join("");
}

console.log(Number(string));
