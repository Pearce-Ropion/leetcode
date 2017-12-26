function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var levelOrder = function(root) {
    var result = [];
    var q = [];
    q.push(root);
    while (q.length != 0) {
        var level = q.length;
        var nodes = [];
        for (var i = 0; i < level; i++) {
            var node = q.shift();
            nodes.push(node.val);
            if (node.left != null) q.push(node.left);
            if (node.right != null) q.push(node.right);
        }
        result.push(nodes);
    }
    return result;
};

var rightSideView = function(root) {
    var result = [], q = [];
    if (!root) return result;
    q.push(root);
    while (q.length != 0) {
        var size = q.length;
        for (var i = 0; i < size; i++) {
            var node = q.shift();
            if (i == size-1) result.push(node.val);
            if (node.left != null) q.push(node.left);
            if (node.right != null) q.push(node.right);
        }
    }
    return result;
};

var largestValues = function(root) {
    var result = [];
    if (!root) return result;
    var q = [];
    q.push(root);
    while (q.length != 0) {
        var size = q.length;
        var big = Number.MIN_SAFE_INTEGER;
        for (var i = 0; i < size; i++) {
            var node = q.shift();
            big = Math.max(big,node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        result.push(big);
    }
    return result;
};

var node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(3);
node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);

//console.log(rightSideView(node));
//console.log(levelOrder(node));
console.log(largestValues(node));
