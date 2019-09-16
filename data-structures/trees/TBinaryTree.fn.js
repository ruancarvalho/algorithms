

function TBinaryTree(root) {
  this.root = root;
}

TBinaryTree.prototype.preorder = function() {
  let output = [];

  const traverse = function(node) {
    if (this.root === null) return;

    output.push(node.data);

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  if (this.root) 
    traverse(this.root);

  return output;
}

/**
 * Each node in a binary tree contains not only the value but also two 
 * reference fields to link to the left child and the right child.
 */
function TNode(data = null) {
    // the node data
    this.data = data;

    // reference to left child
    this.left = null;

    // reference to right child
    this.right = null;

    // (optional) reference to parent node
    this.parent = null;
}

TNode.prototype.toString = function() {
  return this.data.toString();
}