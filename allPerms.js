var s = "string";

var listPermutations = function(str) {
  if (str.length == 1)
    return str;
  var permutations = [];
  for (var i = 0; i < s.length; i++) {
    var char = str.charAt(i);
    if (str.indexOf(char) != i)
      continue;
    var sbstr = str.slice(0, i) + str.slice(i + 1, str.length);
    var permutation;
    for (permutation of listPermutations(sbstr)) {
      permutations.push(char + permutation);
    }
  }
  return permutations;
}

console.log(listPermutations(s));
