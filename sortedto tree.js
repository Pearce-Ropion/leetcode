function ListNode(val) {
  this.val = val;
  this.next = null;
}
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var arr = [-10,-3,0,5,9];
var node = new ListNode(arr[0]);
var nodeIt = node;
for (var i in arr) {
  if (i == arr.length) {
    nodeIt.next = null;
  } else
    nodeIt.next = new ListNode(arr[i+1]);
}
var head = node;
var sortedListToBST = function(head) {
    var counter = 0, it = head, i;
    while (it != null) {
        counter++;
        it = it.next;
    }
    var mid = counter/2;
    it = head
    for (i = 0; i < mid; i++) {
        it = it.next;
    }
    var mid = it.val;
    var root = new TreeNode(mid);
    var treeIt = root;
    it = head;
    while (it != null) {
        var cursor = it;
        var node = new TreeNode(it.val);
        if (it.val < treeIt.val && treeIt.left == null) {
            var node = new TreeNode(it.val);
            treeIt.left = node;
            treeIt = root;
            it = it.next;
        } else if (it.val > treeIt.val && treeIt.right == null) {
            var node = new TreeNode(it.val);
            treeIt.right = node;
            treeIt = root;
            it = it.next;
        } else if (it.val < treeIt.val)
            treeIt = treeIt.left;
        else if (it.val > treeIt.val)
            treeIt = treeIt.right;
    }
    return root;
};
console.log(sortedListToBST(head));
