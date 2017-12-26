var c = 1;
var judgeSquareSum = function(c) {
    if (c < 0) {
        return false;
    }
    var a = 0, b;
    while(a <= Math.sqrt(c)) {
      b = 0;
      console.log("a: "+a);
        while (b <= Math.sqrt(c)) {
          console.log("b: "+b);
          console.log("sum: "+((a*a) + (b*b)));
            if ( ((a*a) + (b*b)) == c) {
                return true;
            }
            b++;
        }
        a++;
    }
    return false;
};

console.log(judgeSquareSum(c));
