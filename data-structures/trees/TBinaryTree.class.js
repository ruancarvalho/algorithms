

class TBinaryTree {

  constructor() {

  }

}

/**
 * Each node in a singly-linked list contains not only the value but also a 
 * reference field to link to the next node. By this way, the singly-linked 
 * list organizes all the nodes in a sequence.
 */
class TNode {
  /**
   * Initializes a TreeNode with some data and references to children nodes.
   * 
   * @param {*} data
   */
  constructor(data = null) {
    // the node data
    this.data = data;

    // reference to left child
    this.left = null;

    // reference to right child
    this.right = null;

    // (optional) reference to parent node
    this.parent = null;
  }

  toString() {
    return this.data;
  }
}