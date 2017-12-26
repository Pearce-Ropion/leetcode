var setZeroes = function(matrix) {
    if (!matrix) return null;
    var i, j, k;
    var m = matrix.length, n = matrix[0].length;
    var dp = matrix.map(function(arr) {
        return arr.slice();
    });
    for (i = 0; i < m; i++) {
        for (j = 0; j < n; j++) {
            console.log(matrix[i][j]);
            if (matrix[i][j] == 0 && dp[i][j] != true) {
                dp[i][j] = true;
                for (k = 0; k < n; k++) {
                    matrix[i][k] = 0;
                    dp[i][k] = true;
                }
                for (k = 0; k < m; k++) {
                    matrix[k][j] = 0;
                    dp[k][j] = true;
                }
            }
        }
    }
};
var printGraph = function(matrix, visited) {
  var m = matrix.length, n = matrix[0].length;
  var x, y;
  for (x = 0; x < m; x++) {
    for (y = 0; y < n; y++) {
      process.stdout.write(matrix[x][y]);
      if (y != n-1)
        process.stdout.write(", ");
    }
    process.stdout.write("\n");
  }
}
var matrix = [[0],[1]];
setZeroes(matrix)
console.log(matrix);
printGraph(matrix, matrix);
