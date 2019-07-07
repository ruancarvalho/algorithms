class TQueue {
  constructor() {
    this.data = [];
  }

  enqueue(node) {
    if (node !== null && node !== undefined) {
      this.data.push(node);
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const front = this.data.shift();
      return front;
    }
  }

  front() {
    if (!this.isEmpty()) {
      return this.data[0];
    }
  }

  isEmpty() {
    return this.data.length === 0;
  }
}