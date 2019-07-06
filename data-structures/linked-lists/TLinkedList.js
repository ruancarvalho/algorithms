/**
 * In a Linked List, it takes us O(N) time to visit an element by index, 
 * where N is the length of the linked list.
 * 
 * This code is intended for educational purposes only.
 * Also, it is extremely verbose for better understanding of flow.
 * 
 * @author ruancarvalho
 */
class TLinkedList {
  /**
   * 
   * @param {*} node 
   */
  constructor(node = null) {
    this.head = node;

    if (this.head !== null) {
      this.length = 1;
    } else {
      this.length = 0;
    }
  }

  /**
   * Get the value of the index-th node in the linked list. 
   * If the index is invalid, return -1. 
   * 
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (this.length === 0 || index >= this.length) {
      return -1
    }

    if (index === 0) {
      return this.head;
    }

    let current = this.head.next;
    for (let i = 1; i < this.length; i++) {
      if (i === index) {
        return current.val;
      } else {
        current = current.next;
      }
    }
  };

  /**
   * We don’t need to move all elements past the inserted element.
   * 
   * You can insert a new node into a linked list in O(1) time complexity, 
   * which is very efficient.
   */
  insert() {

  }

  /**
   * The time complexity of deleting a node will be O(N)
   */
  delete() {

  }
}