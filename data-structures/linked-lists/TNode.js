/**
 * Each node in a singly-linked list contains not only the value but also a 
 * reference field to link to the next node. By this way, the singly-linked 
 * list organizes all the nodes in a sequence.
 */
class TNode {
  /**
   * Initializes a Node with some data and a "pointer" to the next Node.
   * 
   * @param {*} data
   */
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }

  toString() {
    return this.data;
  }
}